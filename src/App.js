
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
//import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js';
import {Link,Route} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import WorkerHome from './Components/Worker/WorkerHome';
import ClientHome from './Components/Client/ClientHome';
import Navbar from './Components/Navbar/Navbar';
import ListUsers from './Components/CRUDUsers/ListUserComponents';
import FooterComponent from './Components/FooterComponent';
import WorkerList from './Components/CRUDUsers/WorkerList';
import AdminCRUD from './Components/Other/AdminCRUD';
import ClientList from './Components/CRUDUsers/ClientList';
import EditUserComponent from './Components/CRUDUsers/EditUserComponent';
import SendUserType from './Components/CRUDUsers/SendUserType';
import PlaceRequirement from './Components/Client/PlaceRequirement';
import ViewRequest from './Components/Worker/ViewRequest';
import ViewStatus from './Components/Client/ViewStatus';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminHome from './Components/Admin/AdminHome';
import DropdownOptions from './Components/Navbar/DropdownOptions';
import Wages from './Components/Client/WageListing';
import Logout from './Components/Admin/Logout';
import LogoutWorker from './Components/Worker/LogoutWorker';
import LogoutClient from './Components/Client/LogoutClient';
import TearmsAndConditions from './Pages/TermsAndConditions';
import AllEmpDetails from './Components/Admin/AllEmpDetails';
import ListCProfile from './Components/Client/ListCProfile';
import EditCProfile from './Components/Client/EditCProfile';
import EditLProfile from './Components/Worker/EditLProfile';
import PaymentHome from './Components/Client/PaymentHome';
import Payment from './Components/Client/Payment';

function App() {
  return (
      <div>
        <Navbar/>
        <Route path="/" component={Home} exact /> 
        <Route path="/login" component={Login} /> 
        <Route path="/register" component={Register} />
        
        <Route path="/workerhome/:userid" component={WorkerHome} />
        <Route path="/clienthome/:userid" component={ClientHome} />
        {/*
        <Route path="/workerhome/:email" component={workerHome} />
        <Route path="/clienthome/:email" component={ClientHome} />
        */}
        <Route path="/usercrud" component={AdminCRUD}/>
        <Route path="/getworkers" component={SendUserType} />
        <Route path="/getclients" component={ClientList} />
        <Route path="/placerequirement" component={PlaceRequirement}/>
        <Route path="/viewworkers" component={WorkerList}/>
        <Route path="/viewrequest" component={ViewRequest}/>
        <Route path="/viewstatus" component={ViewStatus}/>
        {/*<Route path="/adminlogin" component={AdminLogin}/>*/}
        <Route path="/adminhome" component={AdminHome}/>
        <Route path="/edit-user" component={EditUserComponent}/>
        <Route path="/viewwages" component={Wages} />
        <Route path="/users" component={ListUsers} />
        <Route path="/dropdownoptions" component={DropdownOptions} />
        <Route path="/logout" component={Logout} />
        <Route path="/logoutclient" component={LogoutClient} />
        <Route path="/logoutworker" component={LogoutWorker} />
        <Route path="/tandc" component={TearmsAndConditions} />
        <Route path="/adminempdetails" component={AllEmpDetails} />
        <Route path="/clientinfo" component={ListCProfile} />
        <Route path="/edit-client" component={EditCProfile}/>
        <Route path="/edit-worker" component={EditLProfile}/>
        <Route path="/paymenthome" component={PaymentHome}/>
        <Route path="/makepayment" component={Payment}/>
      <FooterComponent/>
  </div>
  );
}


export default App;
