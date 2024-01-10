import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { TailSpin } from "react-loader-spinner";
import { useCreateContactMutation } from "../../../redux/phoneBook/contacts";
// import { useDispatch } from "react-redux";
// import { addContact } from "../../../redux/phoneBook/contactsSlice";

import { Button, Forma, Input, Label } from "./ContactForm.styled";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [visible, setVisible] = useState(false);
  const [createContact, { isLoading }] = useCreateContactMutation();

  // const dispatch = useDispatch();

  useEffect(() => {
    if (name && phone) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [name, phone]);

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else {
      setPhone(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      name,
      number: phone,
    };

    try {
      await createContact(newContact);
      toast.success(`Contact: ${name} - added!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setName("");
      setPhone("");
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    // dispatch(addContact(name, phone));
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          minLength="2"
          placeholder="Enter name..."
          required
        />
      </Label>

      <Label htmlFor="phone">
        Phone
        <Input
          type="tel"
          id="phone"
          value={phone}
          onChange={handleChange}
          minLength="2"
          placeholder="Enter phone..."
          required
        />
      </Label>
      <div>
        {isLoading ? (
          <TailSpin color="orangered" height={53} width={53} />
        ) : (
          <Button type="submit" disabled={!visible}>
            Add
          </Button>
        )}
      </div>
      <ToastContainer />
    </Forma>
  );
};

export default ContactForm;
