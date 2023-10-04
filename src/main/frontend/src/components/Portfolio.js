import React,{useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portfolio =()=>{
	
	const [hover, setHover] = useState([]);
	
	return(
		<div className="portfolio-main">
			<div className="header"></div>
			<div className="myInfo">
				<p>최지혜의 포트폴리오</p>
				<table className="myInfo-content">
					<tr>
						<th rowSpan="7">
							<img src={require("../myImage.jpg")}/>
						</th>
					</tr>
					<tr>
						<th>
							안녕하세요! <br/>
							꾸준히 노력하며 성장하는 개발자 최지혜입니다.
						</th>
					</tr>
					<tr>
						<td>
							- GitHub <a href='https://github.com/rarararararaa'>https://github.com/rarararararaa</a>
						</td>
					</tr>
					<tr>
						<th>
							기본 인적 사항
						</th>
					</tr>
					<tr>
						<td rowSpan="4">
							<ul className="info">
								<li>🙍 최 지 혜 (Jihye Choi)</li>
								<li>✉️ Email : gpwl431@gmail.com</li>
								<li>📅 1999년 05월 30일</li>
								<li>📱 010-6343-7305</li>
							</ul>
						</td>
					</tr>
				</table>
			</div>
			<hr/>
			<div className="etc">
			<div className="education">
				<span className="etc-title">🎓학력사항</span>
				<ul className="info">
					<li>신구대학교 전문학사 졸업</li>
					<ul className="info-detail">
						<li>2020.03 ~ 2022.03</li>
						<li>정보통신보안과 ( 4.17 / 4.5 )</li>
					</ul>
				</ul>
			</div>
			<div className="education">
				<span className="etc-title">📕교육이수</span>
				<ul className="info">
					<li>쌍용교육센터</li>
					<ul className="info-detail">
						<li>2023.03.15 ~ 2023.08.25 ( 5.5개월 )</li>
						<li>AWS 클라우드와 Elasticsearch를 활용한 Java(자바) Full-Stack 개발자 양성과정</li>
					</ul>
				</ul>
			</div>
			<div className="education">
				<span className="etc-title">🧾자격증</span>
				<ul className="info">
					<li>정보처리산업기사</li>
					<ul className="info-detail">
						<li>2021.08.20 취득</li>
					</ul>
					<li>컴퓨터활용능력 1급</li>
					<ul className="info-detail">
						<li>2023.01.27 취득</li>
					</ul>
				</ul>
			</div>
			</div>{/*end etc*/}
			<hr/>
			<div className="technology">
				<span className="technology-title">⚙️기술 스택</span>
				<table className="tech-table">
					<thead>
						<tr>
							<th>분야</th>
							<th>태그</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>프론트엔드</td>
							<td>
								<span id="HTML5">HTML5</span>
								<span id="CSS3">CSS3</span>
								<span id="JavaScript">JavaScript</span>
								<span id="JQuery">JQuery</span>
								<span id="React">React</span>
							</td>
						</tr>
						<tr>
							<td>백엔드</td>
							<td>
								<span id="Java">Java</span>
								<span id="Spring">Spring</span>
							</td>
						</tr>
						<tr>
							<td>DBMS</td>
							<td>
								<span id="OracleDB">OracleDB</span>
							</td>
						</tr>
						<tr>
							<td>etc</td>
							<td>
								<span id="git">git</span>
								<span id="AWS">AWS</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>{/*end technology */}
			<div className="project">
				<span className="project-title">🖥️프로젝트</span>
				<div className="bookProject">
					<span>📚 서점&도서관 통합 시스템</span>
					<Swiper //swiper 설정
						modules={[Navigation, Pagination]}
						spaceBetween={50}
						slicsPerView={1}//화면에 보여줄 페이지 갯수
						navigation
						pagination={{clickable: true}}
						loop={true}
						 onSwiper={(swiper) => console.log(swiper)}
     					 onSlideChange={() => console.log('slide change')}
					>
					<SwiperSlide>
						<img src={require("./img/LM_storemain.png").default}/>
					</SwiperSlide>
					<SwiperSlide>
						<img id="LMall" src={require("./img/LM_storeall.png").default}/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={require("./img/LM_storebest.png").default}/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={require("./img/LM_storecart.png").default} id="LMpay"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={require("./img/LM_storeorder.png").default}  id="LMpay"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={require("./img/LM_bookmain.png").default}  id="LMbook"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={require("./img/LM_bookdetail.png").default}/>
					</SwiperSlide>
					</Swiper>
				</div>{/*end bookProject */}
				<div className="apartProject">
					<span>🏙️ 아파트 커뮤니티 사이트</span>
					<Swiper //swiper 설정
						modules={[Navigation, Pagination]}
						spaceBetween={50}
						slicsPerView={1}//화면에 보열중 페이지 갯수
						navigation
						pagination={{clickable: true}}
						loop={true}
						 onSwiper={(swiper) => console.log(swiper)}
     					 onSlideChange={() => console.log('slide change')}
					>
					<SwiperSlide>
						<img src={require("./img/apartmain.png").default}/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={require("./img/apartnotice.png").default}/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={require("./img/apartbook.png").default}/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={require("./img/apartcommu.png").default} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={require("./img/apartanswer.png").default}  />
					</SwiperSlide>
					<SwiperSlide>
						<img src={require("./img/apartadmin.png").default}/>
					</SwiperSlide>
					</Swiper>
				</div>{/*end apartProject */}
			</div>
		</div>
	)
}
export default Portfolio;
