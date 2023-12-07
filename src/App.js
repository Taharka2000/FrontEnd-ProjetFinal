import Home from './Home'
import AboutUs from './AboutUs'
import Services from './Services'
import Login from './Login'
import Register from './Register'
import { Route,Routes,Navigate } from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext'
import "react-toastify/dist/ReactToastify.css"
import Verification from './Verification'
import Test from './Test'

function App() {
  const {user}=useAuthContext()
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route exact path="/register" element={!user?<Register />:<Navigate to="/account"/>} />
        <Route exact path="/login" element={!user ? <Login />:<Navigate to="/account"/>} />
        <Route exact path="/account" element={user? <Test />:<Navigate to ="/login"/> } />
        <Route exact path="/verification" element={<Verification/>} />
      </Routes>
    </div>
  );
}

export default App;

