import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AllParts from './Pages/AllParts/AllParts';
import Blogs from './Pages/Blogs/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='home' element={<Home />}></Route>
                <Route path='allParts' element={<AllParts />}></Route>
                <Route path='products/:productId' element={<RequireAuth>
                    <Purchase />
                </RequireAuth>}></Route>

                <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
                    <Route index element={<MyProfile />}></Route>
                    <Route path='myOrders' element={<MyOrders />}></Route>
                    <Route path='addReview' element={<AddReview />}></Route>
                    <Route path='payment/:id' element={<Payment />}></Route>

                    <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
                    <Route path='manageOrders' element={<RequireAdmin><ManageOrders /></RequireAdmin>}></Route>
                    <Route path='addProduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
                    <Route path='manageProducts' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
                </Route>
                <Route path='blogs' element={<Blogs />}></Route>
                <Route path='portfolio' element={<Portfolio />}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='signup' element={<SignUp />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;
