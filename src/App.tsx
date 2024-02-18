import "./App.css";
import NavBar from "./components/NavBar";
import Logo from "./assets/logo.svg";
import ControlCenter from "./components/ControlCenter";
import FullDisplay from "./components/FullDisplay";

function App() {
  return (
    <div className="bg-red">
      <div className="flex">
        <aside
          className="w-56 min-h-[85vh] max-h-[87vh] pl-5 bg-black overflow-y-scroll"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          <img src={Logo} alt="" className="mt-2 mb-4" />
          <NavBar />
        </aside>
        <FullDisplay />
      </div>
      <ControlCenter />
    </div>
  );
}

export default App;
