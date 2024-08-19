import "./Login.css";

const Login =()=>{
    return (
        <>
            <div className="login-area">
                <div className="login-box">
                    <h1>Sign In</h1>
                    <div className="form-set">
                        <input type="text" placeholder="Email or Mobile Number" />
                        <input type="password" placeholder="Password" />
                        <button>Sign In</button>
                        <h2>OR</h2>
                        <button>Use a Sign In Code</button>
            
                    </div>
                    <h2>Forgot Password? </h2>
                    
                </div>   
            </div>
        </>
    );
}
export default Login;