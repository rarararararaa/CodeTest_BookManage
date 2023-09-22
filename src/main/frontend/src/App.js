// src/main/frontend/src/App.js
import Login from "./components/Login"
import Register from "./components/Register"
import BookList from "./components/BookList"
import BookInsert from "./components/BookInsert"
import RentBook from "./components/RentBook"
import BookDetail from "./components/BookDetail"
import BookUpdate from "./components/BookUpdate"
import Portfolio from "./components/Portfolio"
import ImageSet from "./components/ImageSet"

import './App.css';
import React, {useState} from 'react';
import {Routes, Route, Link, useLocation} from "react-router-dom"
function App() {
	
	//주소
	const location = useLocation();
	console.log(location);
	let login_check = window.sessionStorage.getItem('login_check');
	let auth = window.sessionStorage.getItem('auth');
	const logout =()=>{
		window.sessionStorage.clear();  
		window.location.href='/';
	}
	const booklist_main=()=>{
		window.location.href='/';
	}
	//console.log(login_check);
	//console.log(auth);
    return (
        <div className="App">
			<p>과제1: 도서관리시스템 | 과제2:포트폴리오/이미지</p>
			{login_check === null ?
			<nav>
				[<Link to="/login">로그인</Link> | <Link to="/register">회원가입</Link>]
				[<Link to="/portfolio">포트폴리오</Link> | <Link to="/imageSet">이미지</Link>]
			</nav>
			: <button onClick={logout}>로그아웃</button>
			}
			{auth === '1' ? '일반회원': (auth === '9' ? 
			<div className="book-Manage">
				관리자
				<nav>
					<Link to="/bookInsert">
						<button>도서 추가</button>
					</Link>
					<Link to="/rentBook">
						<button>도서 대출</button>
					</Link>
					<button onClick={booklist_main}>도서 목록</button>
				</nav>
				{location.pathname === '/' && auth === '9'?
				 <BookList /> :null}
			</div>
			
			:null)}
			<Routes>
				<Route path="/login" element={<Login />}/>
				<Route path="/register" element={<Register />}/>
				<Route path="/bookInsert" element={<BookInsert />}/>
				<Route path="/rentBook" element={<RentBook />}/>
				<Route path="/bookDetail" element={<BookDetail />}/>
				<Route path="/bookUpdate" element={<BookUpdate />}/>
				<Route path="/portfolio" element={<Portfolio />}/>
				<Route path="/imageSet" element={<ImageSet />}/>
			</Routes>
        </div>
    );
}

export default App;