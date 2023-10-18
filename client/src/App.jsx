import Navbar from "./components/Navbar";
import AddMedicine from "./pages/AddMedicine";
import Home from "./pages/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
     
       <Router>
       <Navbar/>
<Routes>  

<Route path={'/'} element={<Home/>}/>
<Route path={'/addMedicine'} element={<AddMedicine/>}/>
</Routes>
</Router>
    </div>
  )
}

export default App
