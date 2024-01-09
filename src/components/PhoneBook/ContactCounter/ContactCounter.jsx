import { useSearchParams } from "react-router-dom";
import { TextP } from "./ContactCounter.styled";

const ContactCounter = ({
  numberOfContacts,
  numberOfFilteredContacts,
  isFiltered,
}) => {
  const [searchParams] = useSearchParams();
  let filteredValue = 0;
  if (searchParams.get("filter")) {
    filteredValue = numberOfFilteredContacts;
  }
  // const getFilteredValue = (searchParams) => {
  //   if (searchParams.get("filter")) {
  //     return numberOfFilteredContacts;
  //   } else {
  //     return 0;
  //   }
  // };

  return (
    <div>
      <TextP>
        Total - <span>{numberOfContacts}</span>
      </TextP>
      {isFiltered && (
        <TextP>
          Filtered - <span>{filteredValue}</span>
        </TextP>
      )}
    </div>
  );
};

export default ContactCounter;
