import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
}

const ProfileUpdateModal = ({ open, close }) => {
  return (
    <Modal open={open} onClose={close}>
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Button onClick={close} variant="contained">Contained</Button>
      </Box>
    </Modal>
  );
};

export default ProfileUpdateModal;
