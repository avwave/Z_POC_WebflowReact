// src/MyWidget.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TypewriterEffect from './TypewriterEffect';
import {Toaster} from "react-hot-toast";
import { ServiceLoader } from './ServiceLoader';

const MyWidget = ({ name }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Toaster/>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Show Name
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TypewriterEffect text={name} />
          <ServiceLoader />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyWidget;