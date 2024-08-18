import './App.css';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Senharec from './pages/senharec/Senharec'; 
import Senhaalt from './pages/senhaalt/Senhaalt';
import DefaltLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';


function App() {
  return (
   <>
    {/* <Header/> */}
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<DefaltLayout><Home/></DefaltLayout>}/>
            <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>} />
            <Route path='/cadastro' element={<SimpleLayout><Cadastro/></SimpleLayout>} />
            <Route path='/senharec' element={<SimpleLayout><Senharec/></SimpleLayout>} /> 
          <Route path='/senhaalt' element={<SimpleLayout><Senhaalt /></SimpleLayout>} /> 
        </Routes>
      </BrowserRouter>
    {/*<Footer/> */}
   </>
  );
}

export default App;
