import { useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth'

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const loginHandler = () => {
    login();
    navigate(-2);
  }
  
  return (<button onClick={loginHandler}> click me for login</button>);
}

export default Login;