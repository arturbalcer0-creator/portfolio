import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SshKeyApp } from './SshKeyApp'
import './index.css'

// One SPA, two case routes — picked by pathname since there's no home page yet.
const isSshKeyCase = window.location.pathname.startsWith('/ssh-key-case')

document.title = isSshKeyCase
  ? 'Кейс — SSH-ключ · Cloud.ru'
  : 'Кейс — Вычислительные ресурсы · Cloud.ru'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isSshKeyCase ? <SshKeyApp /> : <App />}
  </React.StrictMode>,
)
