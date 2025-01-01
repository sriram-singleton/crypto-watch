import React, {useState} from 'react'
import { Box, TextField, Button } from '@material-ui/core';
// import { setLabels } from 'react-chartjs-2/dist/utils';
import { CryptoState } from '../../CryptoContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase';

const Login = ({handleClose}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {setAlert} = CryptoState();

    const handleSubmit = async () => {
      if(!email || !password){
        setAlert({
          open: true,
          maessage: "Please fill all the fields",
          type: "error",
        });
      }

      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        setAlert({
          open: true,
          message: `Login Successful. Welcome ${result.user.email}`,
          type: "success",
        });
        handleClose();

      } catch (error) {
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        });
      }
    }

  return (
    <Box p={3} style={{display: "flex", flexDirection: "column", gap: "20px"}}>
        <TextField variant="outlined" type="email" label="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />

        <TextField variant="outlined" type="password" label="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />

        <Button variant="contained" size="large" style={{backgroundColor: "#EEBC1D"}} onClick={handleSubmit}>
            Login
        </Button>
    </Box>
  )
}

export default Login
