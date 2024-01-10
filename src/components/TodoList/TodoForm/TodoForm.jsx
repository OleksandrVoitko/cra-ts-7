import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { addTask } from "../../../redux/todoList/tasksSlice";

import { Input, Label, Forma, Button } from "./TodoForm.styled";

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
    toast.success(`Todo added!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <Label htmlFor="text">
        Task
        <Input
          type="text"
          name="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter task text..."
        />
      </Label>
      <div>
        <Button type="submit" disabled={!visible}>
          Add
        </Button>
      </div>
      <ToastContainer />
    </Forma>
  );
};

export default TodoForm;
