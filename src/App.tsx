import { BrowserRouter } from "react-router-dom";
import './assets/fonts/roboto.css'
import Router from "./routes";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <img src="" alt="logo"/>
      <div className="main-content">
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;