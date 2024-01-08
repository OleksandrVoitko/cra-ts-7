import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { TextP } from "./ContactCounter.styled";

const ContactCounter = () => {
  const contacts = useSelector((store) => store.contacts);

  const [searchParams] = useSearchParams();
  let filteredContacts = 0;
  let filter = "";
  if (searchParams.get("filter")) {
    filter = searchParams.get("filter");
  }

  const renderedContscts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filter) {
    filteredContacts = renderedContscts.length;
  }

  return (
    <div>
      <TextP>
        Total - <span>{contacts.length}</span>
      </TextP>
      <TextP>
        Filtered - <span>{filteredContacts}</span>
      </TextP>
    </div>
  );
};

export default ContactCounter;
