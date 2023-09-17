import React, {useState} from "react";
import axios from 'axios';

const Login =()=>{
	const [input,setInput] = useState({
		id:"",
		passwd:""
	});
	const onChange =(e)=>{
		const value = e.target.value;
		const id = e.target.id;
		setInput({
			...input,
			[id]:value
		})
	}
	const onClick =(e)=>{
		document.location.href="/register";
	}
	const {id,passwd} = input;
	
	const Axios =()=>{
		console.log(id)
		console.log(passwd)
		axios({
			url:'/api/login',
			method:'post',
			data:{
				id:id,passwd:passwd
			},
			baseURL:'http://localhost:8800'
		}).then(function (response){
			console.log(response.data);
		})
	}
	
	return(
		<div>
			<label>아이디</label>
			<input type="text" id="id" value={id} onChange={onChange}/>
			<label>비밀번호</label>
			<input type="password" id="passwd" value={passwd} onChange={onChange}/>
			<button onClick={()=>Axios()}>로그인</button>
			<button onClick={onClick}>회원가입</button>
		</div>
	)
}
export default Login;