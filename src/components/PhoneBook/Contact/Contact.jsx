import { MdClose } from "react-icons/md";
import { useDeleteContactMutation } from "../../../redux/phoneBook/contacts";
import { ToastContainer, toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

import { Button, DivWrapper, PText } from "./Contacts.styled";

const Contact = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const hadleClick = async (id) => {
    try {
      await deleteContact(id);
      toast.success(`Contact: ${contact.name} - deleted!`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <DivWrapper>
      <PText>
        {contact.name}: {contact.number}
      </PText>

      {isLoading ? (
        <TailSpin color="orangered" height={24} width={24} />
      ) : (
        <Button onClick={() => hadleClick(contact.id)}>
          <MdClose size={24} />
        </Button>
      )}

      <ToastContainer />
    </DivWrapper>
  );
};

export default Contact;
