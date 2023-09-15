// src/main/frontend/src/App.js
import Home from "./components/Home"
import About from "./components/About"
import Counter from "./components/Counter"
import Input from "./components/Input"
import Input2 from "./components/Input2"
import List from "./components/List"
import Login from "./components/Login"

import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Routes, Route, Link} from "react-router-dom"
function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="App">
			<nav>
				<Link to="/">Home</Link> | 
				<Link to="/about">About</Link> |
				<Link to="/counter">Counter</Link> |
				<Link to="/input">Input</Link> |
				<Link to="/input2">Input2</Link> |
				<Link to="/list">List</Link> |*/
				<Link to="/login">Login</Link>
				
			</nav>
			<Routes>
				/*<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/counter" element={<Counter />}/>
				<Route path="/input" element={<Input />}/>
				<Route path="/input2" element={<Input2 />}/>
				<Route path="/list" element={<List />}/>
				<Route path="/login" element={<Login />}/>
			</Routes>
            백엔드에서 가져온 데이터입니다. : {hello}
			<Home />
        </div>
    );
}

export default App;