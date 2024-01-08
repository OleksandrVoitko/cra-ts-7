import Bar from "../../components/Bar";
import Loyout from "../../components/Loyout/Loyout";
import StatusFilter from "../../components/TodoList/StatusFilter";
import TaskList from "../../components/TodoList/TaskList";

import TodoCounter from "../../components/TodoList/TodoCounter";
import TodoForm from "../../components/TodoList/TodoForm";

const TodoList = () => {
  return (
    <Loyout>
      <Bar barName={"Tasks"} filterName={"Filter by status"}>
        <TodoCounter />
        <StatusFilter />
      </Bar>
      <TodoForm />
      <TaskList />
    </Loyout>
  );
};

export default TodoList;
