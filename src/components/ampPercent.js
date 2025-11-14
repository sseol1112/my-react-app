/// 조건부 렌더링 (&& 연산자)
function amp(flag) {    
    
    return <div>{flag ? "새 메시지가 있습니다 📩" : "새 메시지가 없습니다 📨"}</div>;
}
export default amp;