import { useSearchParams } from "react-router-dom";

import { Input } from "./Filter.styled";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let filter = "";
  if (searchParams.get("filter")) {
    filter = searchParams.get("filter");
  }

  const handleChange = (e) => {
    setSearchParams({ filter: e.target.value });
  };

  return (
    <div>
      <Input
        type="text"
        name="text"
        value={filter}
        onChange={handleChange}
        placeholder="Enter searched name..."
      />
    </div>
  );
};

export default Filter;
