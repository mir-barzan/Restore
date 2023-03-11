import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props{
  darkMode:boolean;
  hundleThemeChange:()=>void;  
}

export default function Header({darkMode,hundleThemeChange}:Props) {
    return(
       <AppBar position="static" sx={{mb:4}}>
        <Toolbar>
            <Typography variant="h6">
                RE-Store
            </Typography>
            <Switch checked={darkMode} onChange={hundleThemeChange}/>
        </Toolbar>

       </AppBar>
    )
}