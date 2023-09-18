import React from "react";
import axios from "axios";
import {useForm} from "react-hook-form";

const RentBook =()=>{
	
	const {register, handleSubmit, formState:{errors}} = useForm({mode:"onSubmit"});
	
	const onSubmit =(data)=>{
		let {id, callNumber} = data;
		axios({
			url:'/api/rentBook',
			method:'post',
			data:{
				mem_id:id,
				callNumber:callNumber
			},
			baseURL:'http://localhost:8800'
		}).then((res)=>{
			alert(res.data);
			window.location.href='/';
		})
	}
	
	
	return(
		<form onSubmit={handleSubmit(onSubmit)}>
			<ul>
				<li>
				<label>아이디</label>
				<input type="text" placeholder="회원 아이디를 입력해주세요." {...register("id",{
					required:"필수 입력 항목입니다.",
					pattern: {
						value:/^[A-Za-z0-9]{4,12}$/,
						message:"영문, 숫자 포함 4자~12자 입력해 주세요."
					},
					validate:{
						chekUrl: async (id,check)=> await fetch('/api/check',{
							method:'post',
							headers:{ "Content-type":'application/json; charset=utf-8'},
							body:JSON.stringify(id)
						}).then(res => res.json())
						  .then(res =>{
							console.log(res.result)
							if(res.result === 'pass'){
								check = '등록되지 않은 회원입니다.';
							}
						})|| check,
					}
				})}/>
				<p>{errors.id && errors.id.message}</p>
				</li>
				<li>
					<label>청구번호</label>
					<input type="text" maxLength="10" placeholder="도서청구번호를 입력해주세요." {...register("callNumber",{
						required:"필수 입력 항목입니다.",
						validate:{
							checkUrl: async (callNumber, check)=> await fetch('/api/checkBook',{
								method:'post',
								headers:{ "Content-type":'application/json; charset=utf-8'},
								body:JSON.stringify(callNumber)
							}).then(res => res.json())
							.then(res=>{
								if(!res.result){
									console.log(res.result)
									check = '등록되지 않은 도서입니다.'
								}
							})|| check,
						}
					})}/>
					<p>{errors.callNumber && errors.callNumber.message}</p>
				</li>
			</ul>
			<input type="submit" value="대출등록"/>
		</form>
	)
}
export default RentBook;