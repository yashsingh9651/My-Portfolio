import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Project } from "./components/Project";
function App() {
  return (
    <div className="w-screen overflow-x-hidden">
    <Home/>
    <Portfolio/>
    <Project/>
    <Contact/>
    </div>
  );
}
export default App;
