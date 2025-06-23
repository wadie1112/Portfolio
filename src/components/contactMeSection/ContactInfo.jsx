import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="Gaddourwadie@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+216 27 074 033" Image={FiPhone} />
      <SingleInfo text="Monastir, Tunisia" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
