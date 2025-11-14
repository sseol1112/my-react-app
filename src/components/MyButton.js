import { useState } from "react";
import IsLoginChk from "../components/PropsTest";
import Hello from "../components/Hello";

function MyButton({ id, pwd }) {    
    const [isOpen, setIsOpen] = useState(false);    

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
                Login
            </button>

            <div className={`resultBox ${isOpen ? "on" : ""}`}>
                {/* <p>로그인한 사용자의 아이디는 {id}</p>
                <p>로그인한 사용자의 패스워드는 {pwd}</p> */}

                <Hello name={id} />
                <IsLoginChk flag="true" name={id} isState="접속" />
            </div>
        </>
    );
}

export default MyButton;
