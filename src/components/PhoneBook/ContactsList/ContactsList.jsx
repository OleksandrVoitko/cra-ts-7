// import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useFetchContactsQuery } from "../../../redux/phoneBook/contacts";
import Contact from "../Contact/Contact";
import { Li, Ul } from "./ContactsList.styled";

const ContactsList = () => {
  const { isLoading, data: contacts } = useFetchContactsQuery();

  const [searchParams] = useSearchParams();
  let filterValue = "";
  if (searchParams.get("filter")) {
    filterValue = searchParams.get("filter");
  }

  const getFilteredContacts = () => {
    if (contacts) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else {
      return null;
    }
  };

  return (
    <Ul>
      {isLoading && <p>Loading...</p>}
      {getFilteredContacts() &&
        getFilteredContacts().map((contact) => (
          <Li key={contact.id}>
            <Contact contact={contact} />
          </Li>
        ))}
    </Ul>
  );
};

export default ContactsList;
