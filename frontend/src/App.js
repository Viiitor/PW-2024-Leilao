import './App.css';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Senharec from './pages/senharec/Senharec'; 
import Senhaalt from './pages/senhaalt/Senhaalt';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import PrivateRouter from './components/PrivateRouter';
import Profile from './pages/profile/Profile';


function App() {
  return (
   <>
    {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter/>}>     </Route>  {/*inserir rotas de acesso restrito*/}

            <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
            <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>} />
            <Route path='/cadastro' element={<SimpleLayout><Cadastro/></SimpleLayout>} />
            <Route path='/senharec' element={<SimpleLayout><Senharec/></SimpleLayout>} /> 
          <Route path='/senhaalt' element={<SimpleLayout><Senhaalt/></SimpleLayout>} /> 
          <Route path='/profile' element={<SimpleLayout><Profile/></SimpleLayout>} /> 
        </Routes>
      </BrowserRouter>
    {/*<Footer/> */}
   </>
  );
}

export default App;
