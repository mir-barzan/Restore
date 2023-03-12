import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { Container } from "@mui/system";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  const [darkMode,setDarkMode]=useState(false);
  const palletteType =darkMode ? 'dark':'light';
  const theme = createTheme({
    palette:{
      mode:palletteType,
      background:{
        default:palletteType==='light' ?'#eaeaea':'#121212'
      }
    }
  })

  function hundleThemeChange(){
    setDarkMode(!darkMode);

  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkMode={darkMode} hundleThemeChange={hundleThemeChange}/>
      <Container>
        <Outlet/>
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
