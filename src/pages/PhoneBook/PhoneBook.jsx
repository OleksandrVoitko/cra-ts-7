import Bar from "../../components/Bar";
import Loyout from "../../components/Loyout/Loyout";
import ContactForm from "../../components/PhoneBook/ContactForm";
import ContactCounter from "../../components/PhoneBook/ContactCounter/ContactCounter";
import Filter from "../../components/PhoneBook/Filter/Filter";
import ContactsList from "../../components/PhoneBook/ContactsList";

const PhoneBook = () => {
  return (
    <Loyout>
      <Bar barName={"Contacts"} filterName={"Find contact by name"}>
        <ContactCounter></ContactCounter>
        <Filter></Filter>
      </Bar>
      <ContactForm />
      <ContactsList />
    </Loyout>
  );
};
export default PhoneBook;
