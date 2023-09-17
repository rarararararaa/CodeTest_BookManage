import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Register =()=>{
	//id 중복 체크
	
	//form
	const {register, handleSubmit, formState: { errors }} = useForm({mode:"onChange"});
	//console.log(watch());
	//회원가입 submit
	const onSubmit =(data)=>{
		let {id,passwd,name,cell,email} = data;
		axios({
			url:'/api/register',
			method:'post',
			data:{
				id:id,
				passwd:passwd,
				name:name,
				cell:cell,
				email:email
			},
			baseURL:'http://localhost:8800'
		}).then(function(response){
			alert(response.data);
			document.location.href='/login';
		})
	}
	const onError =(errors)=>{
		console.log(errors);
	}
	return(
		<div className="register-input">
		<form onSubmit={handleSubmit(onSubmit, onError)}>
		<ul>
			<li>
				<label>이름</label>
				<input type="text" name="name" maxLength="5" placeholder="이름" {...register("name",{
					required : "이름을 입력해주세요" //null값 불허
				})}/>
				<p>{errors.name && errors.name.message}</p>
			</li>
			<li>
				<label>아이디</label>
				<input type="text" name="id" placeholder="아이디" {...register("id",{
					required: "id를 입력해주세요",
					pattern:{
						value:/^[A-Za-z0-9]{4,12}$/,
						message:"영문,숫자 포함 4자~12자 입력해주세요."
					},
					validate:{
						checkUrl: async (id, check)=> await fetch('/api/check',{
							method:"post",
							headers : {               //데이터 타입 지정
              				  "Content-Type":"application/json; charset=utf-8"
           				 },
							body:JSON.stringify(id)
						}).then(res => res.json())
						  .then(res =>{
							console.log(res);
							if(res.result === 'non'){
								check = '사용할 수 없는 아이디 입니다.';
							}
						})|| check,
					}
				})}/>
				<p id="id_check">{errors.id && errors.id.message}</p>
			</li>
			<li>
				<label>비밀번호</label>
				<input type="password" name="passwd" placeholder="비밀번호" {...register("passwd", {
					required:"비밀번호를 입력해주세요"
				})}/>
				<p>{errors.passwd && errors.passwd.message}</p>
			</li>
			<li>
				<label>전화번호</label>
				<input type="text" name="cell" placeholder="010-1234-1234" maxLength="13" onInput={(e)=>{//숫자 - 넣기
					if(e.target.value.length === 11){
						e.target.value = e.target.value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
					}else if(e.target.value.length === 13){
						e.target.value = e.target.value.replace(/-/g, '')
													   .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
					}
				}} {...register("cell",{
					required:"전화번호를 입력해주세요",
					pattern:{
						value:/^(01[016789]{1})-[0-9]{3,4}-[0-9]{4}$/,
						message:"전화번호가 정확한지 확인해 주세요"
					}
				})}/>
				<p>{errors.cell && errors.cell.message}</p>
			</li>
			<li>
				<label>이메일</label>
				<input type="email" name="email" placeholder="test@test.com" {...register("email",{
					required:"이메일을 입력해주세요"
				})}/>
				<p>{errors.email && errors.email.message}</p>
			</li>
				<input type="submit" value="회원가입"/>
		</ul>
		</form>
		</div>	
	)
}
export default Register;