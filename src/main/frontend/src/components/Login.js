import React from "react";
import axios from 'axios';
import {useForm} from 'react-hook-form';
const Login =()=>{
	const {register, handleSubmit, formState: {errors}} = useForm({mode:"onSubmit"})
	//console.log(watch());
	const onSumit =(data)=>{
		let {id, passwd} = data;
		axios({
			url:'/api/login',
			method:'post',
			data:{
				id:id,passwd:passwd
			},
			baseURL:'http://localhost:8800'
		}).then(function (response){
			console.log(response.data);
			console.log(response.data.result);
			if(response.data.result){
				window.sessionStorage.setItem("login_check", true);
				window.sessionStorage.setItem("auth", response.data.auth);
				window.location.href="http://localhost:3000/"
			}else{
				alert('아이디 또는 비밀번호 불일치');
			}
		})
	}
	return(
		<div>
		<form onSubmit={handleSubmit(onSumit)}>
			<label>아이디</label>
			<input type="text" id="id" {...register("id",{
				required:"아이디를 입력하세요"
			})}/>
			<p>{errors.id && errors.id.message}</p>
			<label>비밀번호</label>
			<input type="password" id="passwd" {...register("passwd",{
				required:"비밀번호를 입력하세요"
			})}/>
			<p>{errors.passwd && errors.passwd.message}</p>
			<input type="submit" value="로그인"/>
		</form>
		</div>
	)
}
export default Login;