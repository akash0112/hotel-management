import './App.css';
import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import TopNav from './booking/components/TopNav';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';
import Dashboard from './user/Dashboard';
import PrivateRoutes from './booking/components/PrivateRoutes';
import DashboardSeller from './user/DashBoardSeller';
import 'antd/dist/antd.css'
import NewHotel from './hotels/NewHotel';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopNav/>
      <ToastContainer/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <PrivateRoutes exact path="/dashboard" component={Dashboard}/>
      <PrivateRoutes exact path="/dashboard/seller" component={DashboardSeller}/>
      <PrivateRoutes exact path="/hotels/new" component={NewHotel}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
