import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import ArchivedPage from '../pages/ArchivedPage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import AddingPage from '../pages/AddingPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ThemeContext from '../context/ThemeContext';
import LocalContext from '../context/LocalContext';
import { getUserLogged, putAccessToken } from '../utils/api';

function NoteApp() {
const [authedUser, setAuthedUser] = useState(null);
const [initializing, setIntializing] = useState(true);
const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
const [local, setLocal] = useState(localStorage.getItem('local') || 'id');

const toggleTheme = () => {
  setTheme((prevTheme) => {
    const newTheme = prevTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    return newTheme
  })
}

const toggleLocal = () => {
  setLocal((prevLocal) => {
    const newLocal = prevLocal === 'id' ? 'en' : 'id';
    localStorage.setItem('local', newLocal);
    return newLocal
  })
}

const ThemeContextValue = React.useMemo(() => {
  return {
    theme,
    setTheme: setTheme,
    toggleTheme: toggleTheme,
  };
}, [theme]);

const LocalContextValue = React.useMemo(() => {
  return {
    local,
    setLocal: setLocal,
    toggleLocal: toggleLocal,
  };
}, [local]);

React.useEffect(() => {
  async function loggingCheck() {
    const {data} = await getUserLogged();
    setAuthedUser(data);
    setIntializing(false);
  }

  loggingCheck();

}, []);

React.useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
}, [theme, local]);

React.useEffect(() => {
  document.documentElement.setAttribute('lang', local);
}, [local]);

function onLogout(){
  setAuthedUser(null);
  putAccessToken('');
}

async function onLoginSuccess({accessToken}) {
  putAccessToken(accessToken);
  const {data} = await getUserLogged();
  setAuthedUser(data);
}

if(initializing){
  return null;
}

if(authedUser === null) {
  return (
    <LocalContext.Provider value={LocalContextValue}>
          <ThemeContext.Provider value={ThemeContextValue}>
       <div className="note-app">
      <header className='note-app__header'>
        <h1>Notes - Journey of Life</h1>
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess}/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </main>
    </div>
    </ThemeContext.Provider>
    </LocalContext.Provider>
  )
}

  return (
    <LocalContext.Provider value={LocalContextValue}>
          <ThemeContext.Provider value={ThemeContextValue}>
    <div className="note-app">
      <header className='note-app__header'>
        <h1>{local === 'id' ? 'Notes - Petualang Hidup' : 'Notes - Journey of Life'}</h1>
        <Navigation logout={onLogout} name={"aku"}/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archived" element={<ArchivedPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/create-note" element={<AddingPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
    </ThemeContext.Provider>
    </LocalContext.Provider>

    
  );
}

export default NoteApp;