import React,{useState} from "react";

const Input2 =()=>{
	const [inputs,setInputs] = useState({
		name:"",
		email:"",
		tel:""
	});
	const onChange =(e)=>{
		const value = e.target.value;
		const id = e.target.id;
		setInputs({
			...inputs,
			[id]: value
		})
	}
	const {name,tel,email} = inputs;
	
	return(
		<div>
		<div>
			<label>이름</label>
			<input type="text" value={name} id="name" onChange={onChange}/>
		</div>
		<div>
			<label>전화번호</label>
			<input type="tel" value={tel} id="tel" onChange={onChange}/>
		</div>
		<div>
			<label>이메일</label>
			<input type="email" value={email} id="email" onChange={onChange}/>
		</div>
			<p>이름 : {name}</p>
			<p>전화번호 : {tel}</p>
			<p>이름 : {email}</p>
		</div>
	);
}

export default Input2;
