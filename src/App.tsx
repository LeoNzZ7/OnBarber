import { BrowserRouter } from "react-router-dom";
import { Widget } from "./components/feedget/widget";
import { PrimaryContent } from "./components/section.primary";
import { Header } from "./components/section.primary/header";
import { Scheduling } from "./components/section.scheduling";
import { Services } from "./components/section.services";
import './styles.css'

const App = () => {
  return (
    <BrowserRouter>
      <div> 
        <header className="w-screen bg-transparent absolute h-[100px]" >
          <Header/>
        </header>
        <main className="max-w-screen min-h-screen flex flex-col">
          <div className="bg-image w-screen h-screen">
            <div className="w-screen h-screen flex items-center bg-black bg-opacity-70">
              <PrimaryContent/>
            </div>
          </div>
          <Services/>
          <Scheduling/>
        </main>
        <footer>

        </footer>
        <Widget/>
      </div>
    </BrowserRouter>
  );
};

export default App