// import FormDashboard from '../../components/Ui/FormDashboard/FormDashboard'
import { Outlet } from "react-router-dom"

function Users(){

    const headers = ["First Name", "Last Name", "Email"] 
    const line = ["Users"]
    const button = ["Add New User"]

    return (
        <section className='py-4'>
            <Outlet context={{headers, line, button}}/>
        </section>
    )
}

export default Users