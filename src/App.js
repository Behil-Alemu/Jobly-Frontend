import React, { useState, useEffect } from 'react';
import './App.css';
import JoblyApi from '../src/api';
import Routes from '../src/Routes/Routes';
import LoadingSpinner from './helpers.js/LoadingSpinner';
import NavBar from './Routes/NavBar';
import { BrowserRouter } from 'react-router-dom';
import ProfileContext from './ProfileContext';
import jwt from 'jsonwebtoken'

function App() {
	const [ infoReceived, setInfoReceived ] = useState(false);
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ token, setToken ] = useState("token-over-here");

	useEffect(
		function fetchUserData() {
			async function getUser() {
				if (token) {
					try {
            let {username } = jwt.decode(token);
            JoblyApi.token = token
            let currentUser = await JoblyApi.getCurrentUser(username)
            setCurrentUser(currentUser)
            
					} catch (err) {
						console.log(err);
            setCurrentUser(null)
					}
				}
        setInfoReceived(true)
			}
      setInfoReceived(false)
      getUser()
		},
    
		[ token ]
	);

  async function signup(signupData){
    try{
    let token = await JoblyApi.signup(signupData)
    setToken(token)
    }catch(err){
      console.log('signup error',err)
    }
  
  }

  async function login(signupData){
    try{
    let token = await JoblyApi.login(signupData)
    setToken(token)
    }catch(err){
      console.log('login error',err)
    }

  }

  function logout(){
    setCurrentUser(null)
    setToken(null)
  }





	if (!infoReceived) return <LoadingSpinner />;

	return (
		<BrowserRouter>
			<ProfileContext.Provider value={{currentUser,setCurrentUser}}>

				<div className="App">
					<NavBar logout={logout}/>
					<Routes login={login} signup={signup}/>
				</div>
			</ProfileContext.Provider>
		</BrowserRouter>
	);
}

export default App;
