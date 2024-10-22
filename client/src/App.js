import './App.css';
import TopBar from './components/TopBar';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import SignIn from './components/SignIn/SignIn';
import Private from './components/Private';
import SignUp from './components/SignIn/SignUp';
import Dashboard from './components/profile/Dashboard';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className='bg-[#DFF2EB]'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/private' element={<Private />} >
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path="profile" element={<Profile/>} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
