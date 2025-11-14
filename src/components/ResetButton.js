function ResetButton (flag,id,pwd) {
    const resetForm = () => {
        if(id || pwd) {
            document.querySelector(".idVal").value = "";
            document.querySelector(".pwdVal").value = "";
        }
    }
    return (
        <button
            className="loginBtn"
            onClick={resetForm}
            style={{
                backgroundColor: "gray",
                border: "0",
                color: "white",
                padding: "10px 20px",
                marginLeft : "10px",
                marginTop : "10px"
            }}
        >
            Reset
        </button>
    );
}

export default ResetButton;