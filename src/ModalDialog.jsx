import React from "react";
import Form from "./Form";
import Dialog from '@mui/material/Dialog';

const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog  open={open} onClose={handleClose}>
      {/* // form to be created */}
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;
