import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/phoneBook/contactsSlice";

import { Button, DivWrapper, PText } from "./Contacts.styled";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const hadleClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <DivWrapper>
      <PText>
        {contact.name}: {contact.phone}
      </PText>
      <Button onClick={hadleClick}>
        <MdClose size={24} />
      </Button>
    </DivWrapper>
  );
};

export default Contact;
