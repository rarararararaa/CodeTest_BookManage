// src/main/frontend/src/App.js
import Login from "./components/Login"
import Register from "./components/Register"

import './App.css';
import React from 'react';
import {Routes, Route, Link} from "react-router-dom"
function App() {
	let login_check = window.sessionStorage.getItem('login_check');
	let auth = window.sessionStorage.getItem('auth');
	const logout =()=>{
		window.sessionStorage.clear();
		window.location.reload();
	}
	//console.log(login_check);
	//console.log(auth);
    return (
        <div className="App">
			{login_check === null ?
			<nav>
				<Link to="/login">로그인</Link> | <Link to="/register">회원가입</Link>
			</nav>
			: <button onClick={logout}>로그아웃</button>
			}
			{auth === '1' ? '일반회원': (auth === '9' ? 
			<div className="book-Manage">
				관리자
			</div>
			
			:null)}
			<Routes>
				<Route path="/login" element={<Login />}/>
				<Route path="/register" element={<Register />}/>
			</Routes>
        </div>
    );
}

export default App;