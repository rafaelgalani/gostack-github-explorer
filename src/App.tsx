import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </>
  )
}

export default App;