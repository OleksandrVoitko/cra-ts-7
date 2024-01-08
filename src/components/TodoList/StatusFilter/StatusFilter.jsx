import { useSelector, useDispatch } from "react-redux";
import { WrapperDiv } from "./StatusFilter.styled";
import Button from "../../Button";
import { statusFilters } from "../../../redux/todoList/constants";
import { setStatusFilter } from "../../../redux/todoList/filterSlice";

const StatusFilter = () => {
  const filter = useSelector((state) => state.filters.status);
  const dispatch = useDispatch();
  const handleFilterChange = (filter) => {
    dispatch(setStatusFilter(filter));
  };
  return (
    <WrapperDiv>
      <Button
        selected={filter === statusFilters.all}
        handleClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        handleClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        handleClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </WrapperDiv>
  );
};

export default StatusFilter;
