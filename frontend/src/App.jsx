import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Layout } from './components/Layout';
import { Home } from './components/Home';



function App() {

  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App;
