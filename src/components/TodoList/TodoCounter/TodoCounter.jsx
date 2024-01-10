import { useSelector } from "react-redux";
// import { getArrayOfTascs } from "../../../utills/getArrayOfTascs";
import { TextP } from "./TodoCounter.styled";

const TodoCounter = () => {
  // const tasks = getArrayOfTascs(useSelector((state) => state.tasks));
  const tasks = useSelector((state) => state.tasks.tasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      <TextP>
        Active - <span>{count.active}</span>
      </TextP>
      <TextP>
        Completed - <span>{count.completed}</span>
      </TextP>
    </div>
  );
};

export default TodoCounter;
