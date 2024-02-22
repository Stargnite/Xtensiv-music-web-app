import "./App.css";
import NavBar from "./components/NavBar";
import Logo from "./assets/logo.svg";
import ControlCenter from "./components/ControlCenter";
import FullDisplay from "./components/FullDisplay";
import Login from "./components/auth/Login";
import { useEffect, useState } from "react";
import { setClientToken } from "./api/spotify";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token: string | null  = window.localStorage.getItem("token");
    const hash:string = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token:string = hash.split("&")[0].split("=")[1];

      window.localStorage.setItem("token", _token);
      setToken(_token);
    } else {
      setToken(token || "");
      setClientToken(token)
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
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
