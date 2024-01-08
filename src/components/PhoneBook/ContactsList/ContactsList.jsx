import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Contact from "../Contact/Contact";
import { Li, Ul } from "./ContactsList.styled";

const ContactsList = () => {
  const contacts = useSelector((store) => store.contacts);
  const [searchParams] = useSearchParams();
  let filter = "";
  if (searchParams.get("filter")) {
    filter = searchParams.get("filter");
  }

  const renderedContscts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Ul>
      {renderedContscts.map((contact) => (
        <Li key={contact.id}>
          <Contact contact={contact} />
        </Li>
      ))}
    </Ul>
  );
};

export default ContactsList;
