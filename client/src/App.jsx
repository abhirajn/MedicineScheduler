import Navbar from "./components/Navbar";
import AddCareTaker from "./pages/AddCareTaker";
import AddMedicine from "./pages/AddMedicine";
import Home from "./pages/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
     
       <Router>
       {/* <Navbar/> */}
<Routes>  

<Route path={'/'} element={<Home/>}/>
<Route path={'/addMedicine'} element={<AddMedicine/>}/>
<Route path={'/addCaretaker'} element={<AddCareTaker/>}/>
</Routes>
</Router>
    </div>
  )
}

export default App
