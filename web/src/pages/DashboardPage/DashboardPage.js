import "./DashboardPage.css";
import { useContext } from "react";
import { AuthContext } from "../AuthManagement/AuthContext";

export default function DashboardPage() {

    const { user } = useContext(AuthContext);

    return (
        <div className="dashboard-page">

            <div className="dashboard-content">
                <div className="dashboard-images">
                    <div
                    style={{
                        position: "relative",
                        width: "200%",
                        backgroundColor: "#ffff",
                        borderRadius: "1rem",
                        boxShadow: "0 0 0.75rem rgba(0, 0, 0, 0.1)",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <img src="https://i.pinimg.com/736x/8d/79/5a/8d795a0511e38183705ee5810b40c8d2.jpg" 
                        style={{
                            position: "absolute",
                            width: "30rem"
                        }}/>
                    </div>

                    <div
                    style={{
                        position: "relative",
                        width: "100%",
                        backgroundColor: "#ffff",
                        borderRadius: "1rem",
                        boxShadow: "0 0 0.75rem rgba(0, 0, 0, 0.1)",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <img src="https://i.pinimg.com/736x/92/c9/f7/92c9f70d3acbf5faf24634f1458c687e.jpg" 
                        style={{
                            position: "absolute",
                            width: "30rem"
                        }}/>
                    </div>

                    <div
                    style={{
                        position: "relative",
                        width: "100%",
                        backgroundColor: "#ffff",
                        borderRadius: "1rem",
                        boxShadow: "0 0 0.75rem rgba(0, 0, 0, 0.1)",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <img src="https://i.pinimg.com/736x/fc/d7/91/fcd79180dcfe920b63458a6c120c3254.jpg" 
                        style={{
                            position: "absolute",
                            width: "20rem"
                        }}/>
                    </div>
                </div>
                
                <h1>Welcome { user?.username }!</h1>

                <div
                style={{
                    display:"flex",
                    flexDirection: "column",
                    gap: "1rem"
                }}>
                    <div
                    style={{
                        height: "6rem",
                        backgroundColor: "#ffff",
                        borderRadius: "1rem",
                        boxShadow: "0 0 0.75rem rgba(0, 0, 0, 0.1)",
                    }}></div>
                    <div
                    style={{
                        height: "2.5rem",
                        backgroundColor: "#ffff",
                        borderRadius: "1rem",
                        boxShadow: "0 0 0.75rem rgba(0, 0, 0, 0.1)",
                    }}></div>
                    <div
                    style={{
                        height: "5rem",
                        backgroundColor: "#ffff",
                        borderRadius: "1rem",
                        boxShadow: "0 0 0.75rem rgba(0, 0, 0, 0.1)",
                    }}></div>

                </div>
            </div>

            
            
                
        </div>
    )
}