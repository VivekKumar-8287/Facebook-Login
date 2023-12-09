import Dashboard from "./assets/Dashboard";
import Login from "./assets/Login"
import MyButton from "./assets/MyButton"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";


function Layout(){
  return(
    <>
    <Outlet/>
    </>
  )
}
function App() {

  return (
    <div className="flex">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
