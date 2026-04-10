import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import portfolioFavicon from './assets/portfolio.png'

const faviconEl = document.querySelector("link[rel='icon']") || document.createElement('link')
faviconEl.rel = 'icon'
faviconEl.type = 'image/png'
faviconEl.href = portfolioFavicon
document.head.appendChild(faviconEl)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
