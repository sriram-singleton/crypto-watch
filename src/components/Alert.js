import React from 'react'
import { CryptoState } from '../CryptoContext'
import { Snackbar } from '@material-ui/core';
import MUIAlert from "@material-ui/lab/Alert";

const Alert = () => {

  const {alert, setAlert} = CryptoState();

  const handleClose = (event, reason) => {
    if(reason==="clickaway"){
        return;
    }
    setAlert({open: false});
  }

  return (
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
        <MUIAlert onClose={handleClose} elevation={10} variant="filled" severity={alert.type}>
            {alert.message}
        </MUIAlert>
    </Snackbar>
  )
}

export default Alert
