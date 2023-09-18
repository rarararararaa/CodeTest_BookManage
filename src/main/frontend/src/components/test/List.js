import React from "react";

const User =({user})=>{
	return(
		<tr>
			<td>{user.name}</td>
			<td>{user.email}</td>
		</tr>
	);
}

const UserList =()=>{
	
	const users = [
		{email : "user@test.com", name:"홍길동"},
		{email : "user1@test.com", name:"김유신"},
		{email : "user2@test.com", name:"이순신"},
		{email : "user3@test.com", name:"장영실"},
	];
	return(
		<table>
			<thead>
				<tr>
					<th>이름</th>
					<th>이메일</th>
				</tr>
			</thead>
			<tbody>
				{users.map(user => <User user={user}/>)}
			</tbody>
		</table>
	);
}
export default UserList;