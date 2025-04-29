import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Summarize from "./pages/Summarize";

const Layout = () => {
  return (
    <div>
      
      <Outlet /> {/* This renders the nested routes */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="h-screen bg-[#4A102A]">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="summarizer" element={<Summarize />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
