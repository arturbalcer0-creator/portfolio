import React from 'react'
import ReactDOM from 'react-dom/client'
import { inject } from '@vercel/analytics'
import App from './App'
import { SshKeyApp } from './SshKeyApp'
import { AboutApp } from './AboutApp'
import { HomeApp } from './HomeApp'
import './index.css'

inject()

// One SPA, four routes — picked by pathname since there's no router.
const path = window.location.pathname
const isSshKeyCase = path.startsWith('/ssh-key-case')
const isAbout = path.startsWith('/about')
const isHome = path === '/' || path === ''

document.title = isSshKeyCase
  ? 'Кейс — SSH-ключ · Cloud.ru'
  : isAbout
    ? 'О себе · Cloud.ru'
    : isHome
      ? 'Артур Бальцер · Продуктовый дизайнер'
      : 'Кейс — Вычислительные ресурсы · Cloud.ru'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isSshKeyCase ? <SshKeyApp /> : isAbout ? <AboutApp /> : isHome ? <HomeApp /> : <App />}
  </React.StrictMode>,
)
