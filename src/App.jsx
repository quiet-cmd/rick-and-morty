import { lazy } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { AppShell, Group  } from '@mantine/core';

import PrivateWrapper from './components/PrivateWrapper';
import SuspenseWrapper from './components/SuspenseWrapper';
import ErrorBoundary from './components/ErrorBoundary'
import { useAuth } from './features/auth'
import { useOnlineStatus } from './hooks';

const MainPage = lazy(() => import('./features/main/MainPage'));
const CharactersPage = lazy(() => import('./features/characters/CharactersPage'));
const CharacterDetailPage = lazy(() => import('./features/characters/CharacterDetail/CharacterDetailPage'));
const LocationsPage = lazy(() => import('./features/locations/LocationsPage'));
const LocationDetailPage = lazy(() => import('./features/locations/LocationDetail/LocationDetailPage'));
const EpisodesPage = lazy(() => import('./features/episodes/EpisodesPage'));
const EpisodeDetailPage = lazy(() => import('./features/episodes/EpisodeDetail/EpisodeDetailPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const LogoutPage = lazy(() => import('./pages/LogoutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  const { isAuth } = useAuth();
  const isOnline = useOnlineStatus();

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header p="md">
        <nav>
          <Group>
            <NavLink to='/'>main</NavLink>
            <NavLink to='/characters'>characters</NavLink>
            <NavLink to='/locations'>locations</NavLink>
            <NavLink to='/episodes'>episodes</NavLink>
            {!isAuth && <NavLink to='/login'>login</NavLink>}
            {isAuth && <NavLink to='/logout'>logout</NavLink>}
          </Group>
        </nav>
      </AppShell.Header>


      <AppShell.Main>
        <Routes>
          <Route element={<ErrorBoundary isOnline={isOnline}><SuspenseWrapper /></ErrorBoundary>}>
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
      </AppShell.Main>
    </AppShell>
  )
}

export default App
