import "./ProfilePage.css";
import { useContext } from "react";
import { AuthContext } from "../AuthManagement/AuthContext";

export default function ProfilePage() {

    const { user } = useContext(AuthContext);



    // helper functions
    function encryptEmail(email) {
        email = email?.split("@");
        let encryptedEmail = email[0].split("");

        for (let i = 0; i < encryptedEmail.length; i++) {
            if (i > 0 && i < encryptedEmail.length - 1) {
                encryptedEmail[i] = "*";
            }
        }

        return encryptedEmail.join("") + "@" + email[1];
    } 



    return (
        <div className="profile-page">

            <div className="profile-content">
                <h1>Profile</h1>
                <div 
                style={{
                    display: "flex", 
                    gap:"1rem", 
                    flexDirection:"column",
                    marginTop: "1rem",
                }}>
                    <div>
                        <p style={{fontSize: "1rem", color: "#747474"}}>Username</p>
                        <p style={{fontSize: "1.125rem"}}>{user?.username}</p>
                    </div>
                    <div>
                        <p style={{fontSize: "1rem", color: "#747474"}}>Email</p>
                        <p style={{fontSize: "1.125rem"}}>{encryptEmail(user?.emailAddress)}</p>
                    </div>
                </div>
                
            </div>
                
        </div>
    )
}