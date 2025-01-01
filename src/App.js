import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import './App.css';
import {makeStyles} from "@material-ui/core";
import Alert from "./components/Alert"

const useStyles = makeStyles(()=>({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh"
  },
}));

function App() {

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route exact path="/" component={HomePage}  />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
