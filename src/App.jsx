import { Routes, Route, NavLink, Link, useParams } from "react-router-dom"
import characters  from './assets/characters.json'
import episodes from './assets/episode.json'
import locations from './assets/location.json'

function ListItem() {
  const { id } = useParams();
  const character = characters[Number(id) - 1];

  if (!character) {
    return <p>404</p>;
  }

  const characterEntries = Object.entries(character);
  return (
    <ul>
      {characterEntries.map(([key, value]) => (<li key={key}>{value}</li>))}
    </ul>
  );
}

function App() {
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
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<p>main page</p>} />
        <Route path='/characters' element={renderList(characters)} />
        <Route path='/characters/:id' element={<ListItem />} />
        <Route path='/locations' element={renderList(locations)} />
        <Route path='/locations/:id' element={<ListItem />} />
        <Route path='/episodes' element={renderList(episodes)} />
        <Route path='/episodes/:id' element={<ListItem />} />
        <Route path='*' element={<p>something wrong</p>} />
      </Routes>
    </>
  )
}

export default App
