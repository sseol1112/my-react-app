import logo from './logo.svg';
import StyleSheet from './App.css';
import { useState } from 'react';

// 컴포넌트 명은 대문자로 작성해야함.
import MyBtn from "./components/MyButton";

function App() {
  const name = 'React';  
  
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  return (
      <div className="App">
          <div className="login_input_form">
              <h2>Login</h2>
              <div className="login_input_form_box">
                  <label>
                      아이디 : <input type="text" className="idVal" value={id} onChange={(e) => setId(e.target.value)} />
                  </label>

                  <label>
                      패스워드 : <input type="password" className="pwdVal" value={pwd} onChange={(e) => setPwd(e.target.value)} />
                  </label>
              </div>
              <div className="btn-wrap">
                  <MyBtn id={id} pwd={pwd} />
              </div>
          </div>
      </div>
  );
}



export default App;
