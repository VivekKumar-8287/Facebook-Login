import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import ModalDialog from "../ModalDialog";
import { styled } from '@mui/material/styles';


function MyButton() {
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <ColorButton variant="contained" onClick={handleOpen} >
        Create new account
      </ColorButton>
      {/* // display the modal and pass props */}
      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
  
}

const ColorButton = styled(Button)(() => ({
  backgroundColor: "#42b72a",
  '&:hover': {
    backgroundColor: "#2e8021",
  },
}));

export default MyButton;
