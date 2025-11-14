import { useState } from "react";
import IsLoginChk from "../components/PropsTest";
import Hello from "../components/Hello";
import HelloMessage from "../components/HelloMessage";
import AmpPer from "../components/ampPercent";
import MapList from "../components/mapList";

function MyButton({ id, pwd }) {    
    const [isOpen, setIsOpen] = useState(false);    
    const mapN = ["HTML", "CSS", "JavaScript", "React"];
    const handleClick = () => {
        // 아이디/비번 검사 추가 : 로그인 버튼 클릭시, 아이디,패스워드 입력값 확인 (미입력시 확인 alert 노출)
        if (!id || !pwd) {
            alert("아이디와 패스워드를 모두 입력해주세요.");            
            return; // 로그인 기능 실행 안 함
        }
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <button
                className="loginBtn"
                onClick={handleClick}
                style={{
                    backgroundColor: "skyblue",
                    border: "0",
                    color: "white",
                    padding: "10px 20px",
                    marginRight: "10px",
                    marginTop: "10px",
                }}
            >
                확인
            </button>

            <div className={`resultBox ${isOpen ? "on" : ""}`}>
                {/* <p>로그인한 사용자의 아이디는 {id}</p>
                <p>로그인한 사용자의 패스워드는 {pwd}</p> */}

                <Hello name={id} />
                <IsLoginChk flag="true" name={id} isState="접속" />
                <h1> {id} 님이 연습하신 예제 목록은 아래와 같습니다 </h1>
            </div>

            <div className={`loginAfterBox ${isOpen ? "on" : ""}`} style={{ border: "1px solid #ccc", padding: "10px 20px" }}>
                <h2 href="" style={{ color: "#171819", fontSize: "40px" }}>
                    react 문법 예제 연습 (
                    <a href="https://react.dev/" target="_blank" className="link">
                        공식사이트
                    </a>
                    의 예제 참고)
                </h2>
                <HelloMessage />

                <div className="list-item">
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
        </>
    );
}

export default MyButton;
