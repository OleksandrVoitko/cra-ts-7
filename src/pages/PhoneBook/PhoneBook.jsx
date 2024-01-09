import Bar from "../../components/Bar";
import Loyout from "../../components/Loyout/Loyout";
import ContactForm from "../../components/PhoneBook/ContactForm";
import ContactCounter from "../../components/PhoneBook/ContactCounter/ContactCounter";
import Filter from "../../components/PhoneBook/Filter/Filter";
import ContactsList from "../../components/PhoneBook/ContactsList";
import { useState } from "react";

const PhoneBook = () => {
  const [numberOfContacts, setNumberOfContacts] = useState(0);
  const [numberOfFilteredContacts, setNumberOfFilteredContacts] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <Loyout>
      <Bar barName={"Contacts"} filterName={"Find contact by name"}>
        <ContactCounter
          numberOfContacts={numberOfContacts}
          numberOfFilteredContacts={numberOfFilteredContacts}
          isFiltered={isFiltered}
        ></ContactCounter>
        <Filter setIsFiltered={setIsFiltered}></Filter>
      </Bar>
      <ContactForm />
      <ContactsList
        setNumberOfContacts={setNumberOfContacts}
        setNumberOfFilteredContacts={setNumberOfFilteredContacts}
      />
    </Loyout>
  );
};
export default PhoneBook;
