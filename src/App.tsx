import { BrowserRouter } from "react-router-dom";
import './assets/fonts/roboto.css'
import logo from './assets/images/logo.svg'
import Router from "./routes";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <img src={logo} alt="logo"/>
      <div className="main-content">
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;