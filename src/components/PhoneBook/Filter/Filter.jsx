import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "./Filter.styled";

const Filter = ({ setIsFiltered }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsFiltered(false);
    if (searchParams.get("filter")) {
      setIsFiltered(true);
    }
  }, [searchParams, setIsFiltered]);

  const getFilter = (searchParams) => {
    if (searchParams.get("filter")) {
      const value = searchParams.get("filter");
      return value;
    } else {
      return "";
    }
  };

  const handleChange = (e) => {
    setSearchParams({ filter: e.target.value });
  };

  return (
    <div>
      <Input
        type="text"
        name="text"
        value={getFilter(searchParams)}
        onChange={handleChange}
        placeholder="Enter searched name..."
      />
    </div>
  );
};

export default Filter;
