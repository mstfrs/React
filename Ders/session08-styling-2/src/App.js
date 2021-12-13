import { createTheme, ThemeProvider } from "@mui/material";
import { orange, green } from "@mui/material/colors";
import "./App.css";
import Buttons from "./components/material-ui/buttons/Buttons";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";
import StyledButton from "./components/material-ui/styled-button/StyledButton";
import TextFieldComp from "./components/material-ui/text-field/TextFieldComp";
import StyledComponents from "./components/styled-comp/StyledComponents";
import AppBarComp from "./components/material-ui/app-bar/AppBarComp";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: orange[400],
      },
      secondary: {
        main: green[300],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          {/* <StyledComponents /> */}
          <AppBarComp />
          <StyledButton />
          <TextFieldComp />
          <CheckBoxComp />
          <Buttons />
        </header>
      </div>
    </ThemeProvider>
  );
}
export default App;
