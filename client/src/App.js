import './App.css';
// import LoginPage from './components/Login/login';
import Navbar from './Components/Navbar/Navbar';
import SideDash from './Components/SideDash/SideDash';
import Dashboard from './pages/Dashboard/Dashboard';
import Patients from './pages/Dashboard/Patients';
import PatientDetails from './pages/Dashboard/PatientDetails';
import Messages from './pages/Dashboard/Messages';
import Settings from './pages/Dashboard/Settings';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Prediction from './pages/Dashboard/Prediction';
import AddPatients from './pages/Dashboard/AddPatients';

function App() {
  return (
    <BrowserRouter>
      {/* <LoginPage/> */}
      <Navbar/>
      <div className='flex'>
      <SideDash/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/patients' element={<Patients/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path="/patients/:id" element={<PatientDetails/>}/>
          <Route path="/prediction/:id" element={<Prediction/>}/>
          <Route path="/addpatients" element={<AddPatients/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
