import "./App.css";
import NavBar from "./components/NavBar";
import Logo from "./assets/logo.svg";
import ControlCenter from "./components/ControlCenter";
import FullDisplay from "./components/FullDisplay";
import Login from "./components/auth/Login";
import { useEffect, useState } from "react";
import { setClientToken } from "./api/spotify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Playlists from "./components/Playlists";
import SelectedPlaylist from "./components/SelectedPlaylist/SelectedPlaylist";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token: string | null = window.localStorage.getItem("token");
    const hash: string = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token: string = hash.split("&")[0].split("=")[1];

      window.localStorage.setItem("token", _token);
      setToken(_token);
    } else {
      setToken(token || "");
      setClientToken(token || "");
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <div className="bg-red ">
      {/* bg-gradient-to-t from-black to-slate-800 */}
      <div className="flex">
        <Router>
          <aside
            className="w-56 min-h-[85vh] max-h-[87vh] pl-5 bg-black overflow-y-scroll"
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            <img src={Logo} alt="" className="mt-2 mb-4" />
            <NavBar />
          </aside>

          <Routes>
            <Route path="/" element={<FullDisplay />}></Route>
            <Route path="/playlists" element={<Playlists />}></Route>
            <Route path="/explore" element={<FullDisplay />}></Route>
            <Route
              path="/playlists/:selectedPlaylistId/tracks"
              element={<SelectedPlaylist />}
            ></Route>
          </Routes>
        </Router>
      </div>
      <ControlCenter />
    </div>
  );
}

export default App;
