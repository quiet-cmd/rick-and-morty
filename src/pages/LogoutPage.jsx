import { useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth'

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  const logoutHandler = () => {
    logout();
    navigate('/');
  }
  
  return (<button onClick={logoutHandler}> click me for logout</button>);
}

export default Logout;