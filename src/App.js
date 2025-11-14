import logo from './logo.svg';
import StyleSheet from './App.css';
import { useState } from 'react';

// 컴포넌트 명은 대문자로 작성해야함.

import Hello from './components/Hello';
import HelloMessage from './components/HelloMessage';
import IsLogin from "./components/isLoginChk";
import AmpPer from "./components/ampPercent";

import MapList from "./components/mapList";
import MyBtn from "./components/MyButton";
import ResetBtn from "./components/ResetButton";

import PropsTest from './components/PropsTest';

function App() {
  const name = 'React';  
  const mapN = ["HTML", "CSS", "JavaScript", "React"];
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  return (
      <div className="App">
          <div className="login_input_form">
              <h2>로그인</h2>
              <div className="login_input_form_box">
                  <label>
                      아이디 :
                      <input type="text" className="idVal" value={id} onChange={(e) => setId(e.target.value)} />
                  </label>

                  <label>
                      패스워드 :
                      <input type="password" className="pwdVal" value={pwd} onChange={(e) => setPwd(e.target.value)} />
                  </label>
              </div>
          </div>

          {/* 값 전달 */}
          <MyBtn id={id} pwd={pwd} />
          <ResetBtn flag="reset" id={id} pwd={pwd} />
          <AmpPer flag="true" />

          <hr />
          <h2 href="" style={{ color: "#171819", fontSize: "40px" }}>
              react 문법 예제 연습 (
              <a href="https://react.dev/" target="_blank" className="link">
                  공식사이트
              </a>
              의 예제 참고)
          </h2>
          <HelloMessage />
          
          <div class="list-item">
              <h1>[반복문] 예제.</h1>
              <h2>리액트가 다루는 언어들 - 페이지 내 기본선언</h2>
              <ul>
                  {mapN.map((item, index) => (
                      <li key={index}>{item}</li>
                  ))}
              </ul>

              <h2>과일 리스트 - MapList 컴포넌트 사용 </h2>
              <MapList />
          </div>
          <div className={StyleSheet.btnWrap}></div>
      </div>
  );
}



export default App;
