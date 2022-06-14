import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MessageList from './Admin/MessageList';
import './App.css';
import DashBord from './common/DashBord';
import DashbordNav from './common/DashbordNav';
import LoginForm from './common/LoginForm';
import HomePage from './component/HomePage';

import Navbar from './component/Navbar';
import DashbordBox from './Dashbord/DashbordBox';
import UserSignUp from './USER/UserSignUp';
// import UserList from './USER/UserList';


function App() {

  const [list, setlist] = [
    {
      id: 1,
      name: "lakhan",
      email: "lakhan@gamil.com",
      phone: "9876543234"
    },
    {
      id: 2,
      name: "nikhil",
      email: "nikhil@gamil.com",
      phone: "9876543234"
    }
  ]



  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashbord" element={<DashBord />}>
          
        </Route>
        <Route path="/usersignup" element={<UserSignUp />} />
        <Route path="/dashbodnav" element={<DashbordNav/>}/>
        <Route path="/1" element={<DashbordBox/>}/>
        <Route path="/2" element={<MessageList/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
