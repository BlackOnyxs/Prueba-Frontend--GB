import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { lightTheme } from '../theme/light-theme';
import { PeopleProvider } from './context/PeopleProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PeopleProvider>
      <ThemeProvider theme={ lightTheme }>
        <App />
      </ThemeProvider>
    </PeopleProvider>
  </React.StrictMode>,
)
