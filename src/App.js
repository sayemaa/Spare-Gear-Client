import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='home' element={<Home />}></Route>
                <Route path='parts/:partsId' element={<Purchase />}></Route>
                <Route path='blogs' element={<Home />}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='signup' element={<SignUp />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
