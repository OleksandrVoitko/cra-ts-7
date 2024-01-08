import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/todoList/tasksSlice";

import { Input, Forma, Button } from "./TodoForm.styled";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (value) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTask(value));
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <Input
        type="text"
        name="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter task text..."
      />
      <Button type="submit" disabled={!visible}>
        Add
      </Button>
    </Forma>
  );
};

export default TodoForm;
