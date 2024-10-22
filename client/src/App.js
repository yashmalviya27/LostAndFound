import './App.css';
import TopBar from './components/TopBar';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home'; // Ensure Home component exists
import Page from './components/Page'; // Ensure Page component exists
import SignIn from './components/SignIn/SignIn';
import Private from './components/Private';
import Import from './components/Import';

function App() {
  return (
    <div className='bg-[#DFF2EB]'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Home />} />
        <Route path='/page' element={<Page />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/private' element={<Private />}>
          <Route path='import' element={<Import />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
