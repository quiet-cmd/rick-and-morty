import { lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'
import { useAuth } from './providers/AuthProvider';
import PrivateWrapper from './components/PrivateWrapper';
import SuspenseWrapper from './components/SuspenseWrapper';

function App() {
  const { isAuth } = useAuth();

  const MainPage = lazy(() => import('./pages/MainPage'))
  const CharactersPage = lazy(() => import('./pages/CharactersPage'))
  const LocationsPage = lazy(() => import('./pages/LocationsPage'))
  const EpisodesPage = lazy(() => import('./pages/EpisodesPage'))
  const LoginPage = lazy(() => import('./pages/LoginPage'))
  const LogoutPage = lazy(() => import('./pages/LogoutPage'))
  const CharacterDetailPage = lazy(() => import('./pages/CharacterDetailPage'))
  const LocationDetailPage = lazy(() => import('./pages/LocationDetailPage'))
  const EpisodeDetailPage = lazy(() => import('./pages/EpisodeDetailPage'))
  const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

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
        <Route element={<SuspenseWrapper />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/logout' element={<LogoutPage />} />
          <Route element={<PrivateWrapper />}>
            <Route path='/characters' element={<CharactersPage />} />
            <Route path='/characters/:id' element={<CharacterDetailPage />} />
            <Route path='/locations' element={<LocationsPage />} />
            <Route path='/locations/:id' element={<LocationDetailPage />} />
            <Route path='/episodes' element={<EpisodesPage />} />
            <Route path='/episodes/:id' element={<EpisodeDetailPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
