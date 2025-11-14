function useState({name , isState, flag }) {
    return (

        <div>
        { flag === "true" ? <p> {name} 님은 {isState} 상태 입니다. </p> : <p> 상태값을 확인해주세요. </p>}        
        </div>
    )
}


export default useState;