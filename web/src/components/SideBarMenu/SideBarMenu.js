import { useContext, useState } from "react";
import "./SideBarMenu.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../pages/AuthManagement/AuthContext";

export default function SideBarMenu() {
    
    const navigate = useNavigate();
    const { setUser, setUserIsAuthenticated } = useContext(AuthContext);
    const [sidebarVisible, setSidebarVisible] = useState(false);



    // helper functions
    function onSideBarClick() {
        setSidebarVisible(!sidebarVisible);
    }




    // JSX/Api calls
    async function logout() {
        try {
            
            const token = localStorage.getItem("token")
            
            const response = await fetch("http://localhost:8080/logout", {
                method: "POST",
                headers: { "Authorization": `Bearer ${token}` }
            });

            if (response.ok) {
                console.log("Logout successful");

                localStorage.removeItem("token");

                setUser(null);
                setUserIsAuthenticated(null);

                navigate("/login");
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }

    }

    

    return (
        <div className={`sidebar-menu ${sidebarVisible ? 'shown' : ''}`}>

            <div className="sidebar-menu-button-container">
                <div className="sidebar-menu-button" onClick={onSideBarClick}>
                    { sidebarVisible ? 
                    <svg style={{ width: "1.25rem", height: "1.25rem" }} viewBox="0 0 2512 2512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1781.37 0.00390625C2185.11 1.28236 2512 328.966 2512 733V1779L2512 1781.37C2510.72 2184.32 2184.32 2510.72 1781.37 2512L1779 2512H733C328.966 2512 1.28236 2185.11 0.00390625 1781.37L0 1779V733C4.64121e-06 328.175 328.175 4.63896e-06 733 0H1779L1781.37 0.00390625ZM733 169C421.511 169 169 421.511 169 733V1779C169 2090.49 421.511 2343 733 2343H1779C2090.49 2343 2343 2090.49 2343 1779V733C2343 421.511 2090.49 169 1779 169H733ZM882 2342H713V171H882V2342ZM1636.66 865.5C1659.07 865.5 1680.56 874.403 1696.41 890.249C1712.25 906.096 1721.16 927.589 1721.16 950C1721.16 972.411 1712.25 993.903 1696.41 1009.75L1450.5 1255.66C1522.28 1327.44 1594.06 1399.22 1665.84 1471L1696.41 1501.56C1712.25 1517.41 1721.16 1538.9 1721.16 1561.31C1721.16 1583.72 1712.25 1605.22 1696.41 1621.06C1680.56 1636.91 1659.07 1645.81 1636.66 1645.81C1614.25 1645.81 1592.75 1636.91 1576.91 1621.06L1546.34 1590.5C1454.64 1498.8 1362.95 1407.1 1271.25 1315.41C1237.45 1281.61 1237.45 1229.71 1271.25 1195.91L1576.91 890.249C1592.75 874.402 1614.25 865.5 1636.66 865.5Z" 
                        fill="black"/>
                    </svg>
                    :
                    <svg style={{ width: "1.25rem", height: "1.25rem" }} viewBox="0 0 2512 2512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1781.37 0.00390625C2185.11 1.28236 2512 328.966 2512 733V1779L2512 1781.37C2510.72 2184.32 2184.32 2510.72 1781.37 2512L1779 2512H733C328.966 2512 1.28236 2185.11 0.00390625 1781.37L0 1779V733C4.64121e-06 328.175 328.175 4.63896e-06 733 0H1779L1781.37 0.00390625ZM733 169C421.511 169 169 421.511 169 733V1779C169 2090.49 421.511 2343 733 2343H1779C2090.49 2343 2343 2090.49 2343 1779V733C2343 421.511 2090.49 169 1779 169H733ZM882 2342H713V171H882V2342ZM1332.66 865.5C1355.07 865.5 1376.56 874.402 1392.41 890.249L1422.97 920.815L1698.06 1195.91C1731.86 1229.71 1731.86 1281.61 1698.06 1315.41L1392.41 1621.06C1376.56 1636.91 1355.07 1645.81 1332.66 1645.81C1310.24 1645.81 1288.75 1636.91 1272.91 1621.06C1257.06 1605.22 1248.16 1583.72 1248.16 1561.31C1248.16 1538.9 1257.06 1517.41 1272.91 1501.56L1518.81 1255.66C1447.03 1183.88 1375.25 1112.1 1303.47 1040.32L1272.91 1009.75C1257.06 993.903 1248.16 972.411 1248.16 950C1248.16 927.589 1257.06 906.096 1272.91 890.249C1288.75 874.403 1310.25 865.5 1332.66 865.5Z" 
                        fill="black"/>
                    </svg>
                    }
                </div> 
            </div>
            
                
            <div className="sidebar-menu-content">
                <p style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                }}>Mini App</p>

                <div className="menu-buttons">
                    <button className="menu-button" onClick={() => navigate("/dashboard")}>Dashboard</button>
                    <button className="menu-button" onClick={() => navigate("/profile")}>Profile</button>
                    <button className="menu-button" style={{marginTop: "auto"}} onClick={logout}>Logout</button>
                </div>


            </div>

        </div>
    )
}