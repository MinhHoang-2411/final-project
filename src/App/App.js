import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import Header from "../components/Header";

import Employees from "../pages/Employees/Employees";
const theme = createTheme({
  palette: {
    primary: {
      main: "#00a735",
      light: "#00ba41",
    },
    secondary: {
      main: "#333b23",
      light: "#656d53",
    },
    notify: {
      main: "#656d53",
      light: "##8d9579",
      contrastText: "#fff",
    },
    error: {
      main: "#e85151",
    },
    background: {
      default: "#f4fcde",
    },
  },
  //override style & default props
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          transform: "translateZ(0)",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Employees />

      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
