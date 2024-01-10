import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  deleteTask,
  toggleCompleted,
} from "../../../redux/todoList/tasksSlice";

import { Button, DivWrapper, InputCheckbox, PText } from "./Task.styled";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleChange = () => dispatch(toggleCompleted(task.id));
  const handleClick = () => {
    dispatch(deleteTask(task.id));
    toast.success(`Todo deleted!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <DivWrapper>
      <InputCheckbox
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      />
      <PText>{task.text}</PText>
      <Button disabled={!task.completed} onClick={handleClick}>
        <MdClose size={24} />
      </Button>
      <ToastContainer />
    </DivWrapper>
  );
};

export default Task;
