import { useEffect, useState } from 'react'
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
