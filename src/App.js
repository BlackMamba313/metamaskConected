import React from "react";
import {Grid,} from "@mui/material";
import ButtonConnect from "../components/ButtonConnect";
import AccountPopUp from "../components/AccountPopUp";

function App() {
    const [open, setOpen] = React.useState(false);
    const onToggle = () => setOpen(!open);
  return (
    <Grid sx={{height: '100vh'}} container justifyContent="center" alignItems='center'>
        <ButtonConnect onClick={onToggle}/>
        <AccountPopUp open={open} onClose={onToggle}/>
    </Grid>
  );
}

export default App;
