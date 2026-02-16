import "./AuthRegisterFormContainer.css";

export default function AuthRegisterFormContainer({ 
    children,
    formPurpose,
}) {
    return (
        <div className="auth-register-form-container">
            <p style={{
                fontSize: "1.5rem",
                fontWeight: "bolder",
            }}>Mini App</p>
            <div className="card">  
                {children}
            </div>
            <div className="form-footer">

                {formPurpose=="register" && 
                <p>Already have an account? <a href="/login">Sign in</a></p>
                }

                {formPurpose=="login" && 
                <p>Don't have an account? <a href="/register">Register</a></p>
                }
            </div>
        </div>
    );
}
