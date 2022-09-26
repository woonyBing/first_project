import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, ProgressBar } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import AboutMe from "./component/AboutMe/AboutMe.js";
import Project from "./component/Project/Project.js";
import Skill from "./component/AboutMe/Skill";
import { useState, useEffect } from "react";
import ProjecDetail from './component/Project/ProjectDetail.js';

function App() {
  
  let [pjList, setpjList] = useState([
    {
        id : 'pj001',
        name : 'Bingfinite',
        content : '포트폴리오를 한눈에 볼 수 있도록 제작한 개인 사이트입니다',
        mainImgPath : '/images/pj_bingfinite.png',
        detailThumb : ['/images/bingfinite_main.jpg', '/images/bingfinite_m.jpg'],
        detailComment : '이 프로젝트에 대한 설명',
        detailImgPath : ['/images/bingfinite_main.jpg', '/images/bingfinite_aboutme.jpg', '/images/bingfinite_project.jpg']
    },
    {
        id : 'pj002',
        name : 'Bear Run',
        content : 'HTML, CSS, JAVA SCRIPT 연습을 위해 만든 미니게임 입니다',
        mainImgPath : '/images/pj_bearrun.png',
        detailThumb : ['경로1', '경로2'],
        detailComment : '이 프로젝트에 대한 설명2',
        detailImgPath : ['경로1', '경로2', '경로3', '경로4']
    },
    {
        id : 'pj003',
        name : 'Todo List',
        content : '강의 중 진행한 TodoList를 클론코딩 했습니다',
        mainImgPath : '',
        detailThumb : ['경로1', '경로2'],
        detailComment : '이 프로젝트에 대한 설명',
        detailImgPath : ['경로1', '경로2', '경로3', '경로4']
    },
    {
        id : 'pj004',
        name : 'Market',
        content : '강의 중 진행한 Market 클론코딩 했습니다',
        mainImgPath : '',
        detailThumb : ['경로1', '경로2'],
        detailComment : '이 프로젝트에 대한 설명',
        detailImgPath : ['경로1', '경로2', '경로3', '경로4']
    },
  ]);

  let navigate = useNavigate();

  return (
    <div>
      <div className="mainBody">
        <Routes>
          <Route path="/" element={
            <div>
              <Home/>
            </div>
          }></Route>
          <Route path="/aboutme" element={
            <div>
              <MenuBar/>
              <AboutMe/>
              <Footer/>
            </div>
          }></Route>
          <Route path="/project" element={
            <div>
              <MenuBar/>
              <div>
                <h3 style={{textAlign:'center', marginTop:'80px'}}>Project</h3>
                  <div className="CardWrap">
                    <div className="CardContainer">
                      {
                        pjList.map((projectList, i)=>{
                          // console.log(i)
                          return(
                            
                                <Project key={projectList.id} projectList={projectList} i={i}/>
                          )
                        })
                      }
                      
                    </div>
                  </div>
              </div>
              <Footer/>
            </div>
          }>
          </Route>
        <Route path="/project/:id" element={
          <div>
            <MenuBar/>
            <ProjecDetail pjList={pjList}/>
            <Footer/>
          </div>
        } />
        <Route path="*" element={<div>404 not found</div>}></Route>
      </Routes>
      </div>
    </div>
  );
}


function Home() {
  let navigate = useNavigate();
  return(
    <div className="Home">
        <h1 style={{color:'rgb(73, 132, 232)'}}>Bingfinite :</h1>
        <p style={{color:'gray'}}>Bing Ye Eun + Infinite</p>
        <br/>
        <h4>성장 가능성이 무한한 신입 개발자,</h4>
        <h4>안녕하세요 <b>빙예은</b>입니다.</h4>
        <div>
          <div className="mainButton" onClick={()=>{navigate('/aboutme')}}>About Me</div>
          <div className="mainButton" onClick={()=>{navigate('/project')}}>Project</div>
        </div>
    </div>
  )
}

function MenuBar() {
  let navigate = useNavigate();
  return(
    <div className="Header">
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand id="navbarLogo" href="/">Bingfinite</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="navbarCategory" onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link className="navbarCategory" onClick={()=>{navigate('/aboutme')}}>About Me</Nav.Link>
            <Nav.Link className="navbarCategory" onClick={()=>{navigate('/project')}}>Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}


function Footer(){
  return(
    <div className="Footer">
      <div className="ftLogo">
        <h3>Bingfinite :</h3>
        <div style={{color:'white'}}>Bing Ye Eun + Infinite</div>
      </div>
      <div className="ftSns">
        <div className="ftSnsInsta">
        <img src={process.env.PUBLIC_URL + "/images/icon_insta.png"} width="25px"/>
        </div>
        <div className="ftSnsTalk">
        <img src={process.env.PUBLIC_URL + "/images/icon_kakao.png"} width="25px"/>
        </div>
      </div>
      <div className="ftCopyright">
      Copyright 2022. Bing Ye Eun. All rights reserved.
      </div>
    </div>
  )
}

export default App;
