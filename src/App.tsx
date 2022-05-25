import { BrowserRouter } from "react-router-dom";
import { Widget } from "./components/feedget/widget";
import { Header } from "./components/header";
import './styles.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen min-w-screen"> 
        <header className="w-screen bg-transparent absolute h-[100px]" >
          <Header/>
        </header>
        <main className="w-screen h-screen" >
          <div className="w-screen h-screen bg-black bg-opacity-70" >
          
          </div>
        </main>
        <footer>

        </footer>
        <Widget/>
      </div>
    </BrowserRouter>
  );
};

export default App