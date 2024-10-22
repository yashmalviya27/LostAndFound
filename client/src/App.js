import './App.css';
import TopBar from './components/TopBar';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import SignIn from './components/SignIn/SignIn';
import Private from './components/Private';


function App() {
  return (
    <div className='bg-[#DFF2EB]'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/private' element={<Private />}>
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
