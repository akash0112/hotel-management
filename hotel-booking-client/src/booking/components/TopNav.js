import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  };
 const guestLinks=(
  <>
  <Link className="nav-link" to="/login">
    Login
  </Link>
  <Link className="nav-link" to="/register">
    Register
  </Link>
</>
 )
 const userLinks=(
   <>
   <Link className="nav-link" to="/dashboard">
    Dashboard
  </Link>
   <div className="nav-link" style={{cursor:"pointer"}} onClick={logout}>
          Logout
        </div>
   </>
 )
  return (
    <div className="nav bg-dark p-3 d-flex justify-content-between">
      <Link className="nav-link" to="/">
        Home
      </Link>

      {auth==null?guestLinks:userLinks}
    </div>
  );
};

export default TopNav;
