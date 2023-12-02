import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



//Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Message from './components/layout/Message';

//Pages
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Newsletter from './components/pages/Newsletter';
import Home from './components/pages/Home';
import NewsletterDatails from './components/newsletter/newsletterDatails';

// Context
import { UserProvider } from './components/context/UserContext';
import PrivateRoute from './components/routes/PrivateRoute';


function App() {
  return (

    <Router>

      <UserProvider>

        <Navbar/> 

        <Message/>

        <Container>
      
          <Routes>

            <Route path='/login' element={<Login/>}> </Route>

            <Route path='/register' element={<Register/>}> </Route>

            <Route path='/newsletters' element={<Newsletter/>}> </Route>

            <Route path='/newsletters/:id' element={<NewsletterDatails/>}> </Route>

            {/* <PrivateRoute path='newsletter' component={<Newsletter/>} /> */}

            <Route path='/' element={<Home/>}> </Route>

          </Routes>

        </Container>      

        <Footer/>

      </UserProvider>

    </Router>
    
  );
}

export default App;
