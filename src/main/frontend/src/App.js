// src/main/frontend/src/App.js
import Login from "./components/Login"
import Register from "./components/Register"

import './App.css';
import React from 'react';
import {Routes, Route, Link} from "react-router-dom"
function App() {

    return (
        <div className="App">
			<nav>
				<Link to="/login">로그인</Link> | <Link to="/register">회원가입</Link>
			</nav>
			<Routes>
				<Route path="/login" element={<Login />}/>
				<Route path="/register" element={<Register />}/>
			</Routes>
        </div>
    );
}

export default App;