import { useMemo, useState } from "react";
import { allQueryableRecords } from "../../data/portfolioData";
import { ui } from "../../data/uiText";
import { useLanguage } from "../../hooks/useLanguage";

const entities = ["Projects", "Experience", "Internships"];
const modes = ["SQL", "DAX", "Python", "Normal"];
const modeExtensions = {
  SQL: "sql",
  DAX: "dax",
  Python: "py",
  Normal: "txt",
};
const technologies = [
  "All technologies",
  "Power BI",
  "Power Automate",
  "SharePoint",
  "DAX",
  "Power Query",
  "SQL",
  "Python",
  "REST API",
  "Talend",
  "PySpark",
  "SAP",
];
const presets = [
  { key: "powerbi", entity: "Projects", technology: "Power BI" },
  { key: "automation", entity: "Experience", technology: "Power Automate" },
  { key: "sql", entity: "Internships", technology: "SQL" },
  { key: "python", mode: "Python", entity: "Internships", technology: "Python" },
  { key: "experience", entity: "Experience", technology: "All technologies" },
  { key: "internships", entity: "Internships", technology: "All technologies" },
];

function buildQuery(mode, entity, technology, copy) {
  const hasFilter = technology !== "All technologies";
  if (mode === "Normal") {
    const label = copy.entities[entity];
    return hasFilter
      ? copy.normalFiltered(label, technology)
      : copy.normalAll(label);
  }
  if (mode === "DAX") {
    return hasFilter
      ? `CALCULATETABLE(\n  ${entity},\n  ${entity}[Technology] = "${technology}"\n)`
      : `EVALUATE\n${entity}`;
  }
  if (mode === "Python") {
    const source = `portfolio["${entity}"]`;
    return hasFilter
      ? `records = ${source}\nresults = records[\n    records["technologies"].apply(\n        lambda stack: "${technology}" in stack\n    )\n]\nresults`
      : `results = ${source}\nresults`;
  }
  return `SELECT *\nFROM Portfolio.${entity}${hasFilter ? `\nWHERE Technology = '${technology}'` : ""};`;
}

export default function QueryBuilder({ onResults }) {
  const language = useLanguage();
  const copy = ui[language].query;
  const [mode, setMode] = useState("SQL");
  const [entity, setEntity] = useState("Projects");
  const [technology, setTechnology] = useState("Power BI");
  const [hasRun, setHasRun] = useState(false);

  const query = useMemo(
    () => buildQuery(mode, entity, technology, copy),
    [mode, entity, technology, copy],
  );

  const runQuery = (
    nextEntity = entity,
    nextTechnology = technology,
    nextMode = mode,
  ) => {
    setMode(nextMode);
    setEntity(nextEntity);
    setTechnology(nextTechnology);
    setHasRun(true);
    const matches = allQueryableRecords.filter((record) => {
      const entityMatch = record.entity === nextEntity;
      const technologyMatch =
        nextTechnology === "All technologies" ||
        record.technologies?.includes(nextTechnology);
      return entityMatch && technologyMatch;
    });
    onResults({ entity: nextEntity, technology: nextTechnology, matches });
    window.setTimeout(() => {
      document.getElementById("query-results")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <section className="query-section section" id="query">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2>{copy.title}</h2>
        </div>
        <p>{copy.description}</p>
      </div>

      <div className="query-shell">
        <div className="query-toolbar" aria-label={copy.languageLabel}>
          {modes.map((item) => (
            <button
              className={mode === item ? "mode-button active" : "mode-button"}
              key={item}
              onClick={() => setMode(item)}
              type="button"
            >
              {item}
            </button>
          ))}
          <span className="connection"><i /> {copy.connected}</span>
        </div>

        <div className="query-workspace">
          <div className="query-controls">
            <label>
              {copy.show}
              <select value={entity} onChange={(event) => setEntity(event.target.value)}>
                {entities.map((item) => (
                  <option key={item} value={item}>{copy.entities[item]}</option>
                ))}
              </select>
            </label>
            <span className="operator">{copy.where}</span>
            <label>
              {copy.technology}
              <select
                value={technology}
                onChange={(event) => setTechnology(event.target.value)}
              >
                {technologies.map((item) => (
                  <option key={item} value={item}>
                    {item === "All technologies" ? copy.allTechnologies : item}
                  </option>
                ))}
              </select>
            </label>
            <button className="run-button" onClick={() => runQuery()} type="button">
              <span>▶</span> {copy.run}
            </button>
          </div>

          <div className="query-preview">
            <div className="window-bar">
              <span /><span /><span />
              <small>
                career_query.{modeExtensions[mode]}
              </small>
            </div>
            <pre aria-live="polite"><code>{query}</code></pre>
          </div>
        </div>

        <div className="presets" aria-label={copy.quick}>
          <span>{copy.quick}</span>
          {presets.map((preset) => (
            <button
              key={preset.key}
              onClick={() =>
                runQuery(preset.entity, preset.technology, preset.mode ?? mode)
              }
              type="button"
            >
              {copy.presets[preset.key]}
            </button>
          ))}
          <a href="#roadmap">{copy.presets.learning}</a>
        </div>
      </div>
      <span className="sr-only" aria-live="polite">
        {hasRun ? copy.complete : ""}
      </span>
    </section>
  );
}
