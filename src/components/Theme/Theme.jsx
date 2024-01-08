import { ThemeProvider } from "styled-components";

const theme = {
  colors: { accentColor: "orange" },
};

const Theme = () => {
  <ThemeProvider theme={theme}></ThemeProvider>;
};

export default Theme;
