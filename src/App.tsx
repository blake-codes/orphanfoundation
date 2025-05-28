import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles";
import { AuthProvider } from "./AuthContext";
import Home from "./pages/ Home";

import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Programs from "./pages/Programs";
import Media from "./pages/Media";
import Donate from "./pages/Donate";
import Login from "./pages/Login";
import Messages from "./pages/Messages";


const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/media" element={<Media />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
       

          <Route element={<ProtectedRoute redirectTo="/login" />}>
                    <Route path="/dashboard" element={<Messages />} />
          </Route>
          <Route
            element={<ProtectedRoute redirectTo="/" requireAdmin />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
