import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchContactsQuery } from "../../../redux/phoneBook/contacts";
import Contact from "../Contact/Contact";
import { Li, Ul } from "./ContactsList.styled";

const ContactsList = ({ setNumberOfContacts, setNumberOfFilteredContacts }) => {
  const { isLoading, data: contacts } = useFetchContactsQuery();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let filterValue = "";
    if (searchParams.get("filter")) {
      filterValue = searchParams.get("filter");
    }

    if (Array.isArray(contacts)) {
      const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );

      setNumberOfContacts(contacts.length);
      setNumberOfFilteredContacts(filteredContacts.length);
    }
  }, [
    isLoading,
    searchParams,
    contacts,
    setNumberOfContacts,
    setNumberOfFilteredContacts,
  ]);

  const getFilterValue = (searchParams) => {
    if (searchParams.get("filter")) {
      return searchParams.get("filter");
    } else {
      return "";
    }
  };

  const getFilteredContacts = (contacts) => {
    if (Array.isArray(contacts)) {
      const filteredContacts = contacts.filter((contact) =>
        contact.name
          .toLowerCase()
          .includes(getFilterValue(searchParams).toLowerCase())
      );

      return filteredContacts;
    } else {
      return null;
    }
  };

  return (
    <Ul>
      {isLoading && <p>Loading...</p>}
      {getFilteredContacts(contacts) &&
        getFilteredContacts(contacts).map((contact) => (
          <Li key={contact.id}>
            <Contact contact={contact} />
          </Li>
        ))}
    </Ul>
  );
};

export default ContactsList;
