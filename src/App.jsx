import { 
  HashRouter as Router, Routes, Route,Outlet } from "react-router-dom"
import Home from "./pages/Home"
  const Layout = ()=>{
    <div>

    </div>
  }
function App() {
  
  return (
   <div className="h-screen bg-[#4A102A]">

      <Router>
        <Routes>
          <Route path="/" element = {<Layout />}>
          <Route index element = {<Home />} />
          <Route path="home" element={<Home />} />

          </Route>
        </Routes>
      </Router>
   </div>
  )
}

export default App
