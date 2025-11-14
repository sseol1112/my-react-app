// 조건부 렌더링 (삼항 연산자)
function isLogin(name, flag) {
    const isLogin = flag;
    return <p>{isLogin ? "환영합니다" + {name} +"님, 로그인상태입니다 🎉" : "로그인이 필요합니다 🔒"}</p>;    
}
    


export default isLogin;