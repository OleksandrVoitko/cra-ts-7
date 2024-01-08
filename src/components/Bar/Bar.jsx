import { Header, Section, TitleH2 } from "./Bar.styled";

const Bar = ({ barName, filterName, children }) => {
  return (
    <Header>
      <Section>
        <TitleH2>{barName}:</TitleH2>
        {children[0]}
      </Section>
      <Section>
        <TitleH2>{filterName}:</TitleH2>
        {children[1]}
      </Section>
    </Header>
  );
};

export default Bar;
