import { useSelector } from "react-redux";
// import { getArrayOfTascs } from "../../../utills/getArrayOfTascs";
import { getVisibleTasks } from "../../../utills/getVisibleTasks";
import Task from "../Task/Task";
import { Li, Ul } from "./TaskList.styled";

const TaskList = () => {
  // const tasks = getArrayOfTascs(useSelector((store) => store.tasks));
  const tasks = useSelector((store) => store.tasks.tasks);
  const statusFilter = useSelector((store) => store.filters.status);

  const renderedTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <Ul>
      {renderedTasks.map((task) => (
        <Li key={task.id}>
          <Task task={task} />
        </Li>
      ))}
    </Ul>
  );
};
export default TaskList;
