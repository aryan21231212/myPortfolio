
import { createRoot } from 'react-dom/client'

import './index.css'

import { StrictMode } from 'react'
import Landing from './components/Landing'


createRoot(document.getElementById('root')).render(

<StrictMode>
  <Landing />
</StrictMode>

)
