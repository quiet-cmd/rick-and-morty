import { Routes, Route, NavLink, Link, useParams, Navigate, useNavigate } from "react-router-dom"
import characters  from './assets/characters.json'
import episodes from './assets/episode.json'
import locations from './assets/location.json'
import { useAuth } from './providers/AuthProbider';
import PrivateWrapper from './components/PrivateWrapper';

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate('/');
  }

  return (<button onClick={logoutHandler}> click me for logout</button>);
}

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const loginHandler = () => {
    login();
    navigate(-2);
  }

  return (<button onClick={loginHandler}> click me for login</button>);
}

function ListItem() {
  const { id } = useParams();
  const character = characters[Number(id) - 1];

  if (!character) {
    return <Navigate to='/404' />;
  }

  const characterEntries = Object.entries(character);
  return (
    <ul>
      {characterEntries.map(([key, value]) => (<li key={key}>{value}</li>))}
    </ul>
  );
}

function App() {
  const { isAuth } = useAuth();

  const renderList = (list) => (
    <ul>
      {list.map(({id, name}) => (<li key={id}><Link to={`./${id}`}>{name}</Link></li>))}
    </ul>
  )

  return (
    <>
      <nav>
        <ul>
          <li><NavLink to='/'>main</NavLink></li>
          <li><NavLink to='/characters'>characters</NavLink></li>
          <li><NavLink to='/locations'>locations</NavLink></li>
          <li><NavLink to='/episodes'>episodes</NavLink></li>
          {!isAuth && <li><NavLink to='/login'>login</NavLink></li>}
          {isAuth && <li><NavLink to='/logout'>logout</NavLink></li>}
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<p>main page</p>} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route element={<PrivateWrapper />}>
          <Route path='/characters' element={renderList(characters)} />
          <Route path='/characters/:id' element={<ListItem />} />
          <Route path='/locations' element={renderList(locations)} />
          <Route path='/locations/:id' element={<ListItem />} />
          <Route path='/episodes' element={renderList(episodes)} />
          <Route path='/episodes/:id' element={<ListItem />} />
        </Route>
        <Route path='*' element={<p>something wrong</p>} />
      </Routes>
    </>
  )
}

export default App
