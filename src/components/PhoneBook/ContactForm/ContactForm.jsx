import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../../redux/phoneBook/contactsSlice";

import { Button, Forma, Input, Label } from "./ContactForm.styled";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (name && phone) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [name, phone]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addContact(name, phone));
    setName("");
    setPhone("");
  };

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else {
      setPhone(e.target.value);
    }
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
        <Button type="submit" disabled={!visible}>
          Add
        </Button>
      </div>
    </Forma>
  );
};

export default ContactForm;
