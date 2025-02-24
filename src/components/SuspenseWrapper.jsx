import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const SuspenseWrapper = () => {
  return <Suspense fallback='loading...'><Outlet /></Suspense>
}

export default SuspenseWrapper;
