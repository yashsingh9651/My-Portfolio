import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Project } from "./components/Project";
function App() {
  return (
    <div style={{fontFamily:'Chakra Petch'}} className="w-screen custom3">
      <Home/>
      <Portfolio/>
      <Project/>
      <Contact/>
    </div>
  );
}
export default App;