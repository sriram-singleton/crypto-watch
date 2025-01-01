import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { CryptoState } from '../CryptoContext';
import AuthModal from './authentication/AuthModal';
import UserSidebar from './authentication/UserSidebar';
import logo from '../crypto-icon1.png';

const useStyles = makeStyles(()=>({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer"
    },
    icon: {
        paddingRight: 10,
    }
}))

const Header = () => {
  
  const classes = useStyles();  

  // history is hook for redirecting.   
  const history = useHistory();

  const {currency, setCurrency, user} = CryptoState();

  const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#fff",
        },
        type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            {/* Container makes screen responsive */}
            <Container>  
                <Toolbar>
                    <img src={logo} alt='Logo' className={classes.icon} height="45" />
                    <Typography onClick={()=> history.push("/")} className={classes.title} variant='h6'>
                        Crypto Watch
                    </Typography>

                    <Select variant='outlined' style={{
                        width: 100,
                        height: 40,
                        marginRight: 15
                    }}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"INR"}>INR</MenuItem>
                    </Select>

                    {user ? <UserSidebar /> : <AuthModal />}
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  )
}

export default Header
