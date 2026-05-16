import { NavLink } from "react-router-dom";
import Style from "../Sidebar/Sidebar.module.css";

function Sidebar() {
    const Links = [
        {icon: "fa-chart-line", title: "Status", path: "/"},
        {icon: "fa-users", title: "User Management", path: "/Users"},
        {icon: "fa-building", title: "Projects Management", path: "/Projects"},
        {icon: "fa-code", title: "Dvelopers Management", path: "/Developers"},
        {icon: "fa-globe", title: "CMS"},
        {icon: "fa-message", title: "Live Chat"},
]
    return(
        <aside className={`min-vh-100 py-4 ${Style.Sidebar}`}>
            
            <div className="px-4 fw-semibold fs-4 mb-3">Dashboard</div>
            <nav>

                {Links.map((item, index)=>(
                <NavLink to={item.path}
                    key={index} className={`py-4 px-3 d-flex align-items-center gap-2 ${Style.navItem}`}>
                    <i className={`fa-solid ${item.icon} ${Style.icon}`}></i>
                    <span className={Style.linkTittle}>{item.title}</span>
                </NavLink>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar;