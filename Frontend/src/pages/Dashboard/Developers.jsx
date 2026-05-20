import { Outlet } from "react-router-dom"

export default function Developers() {
 const headers = ["First Name", "Last Name", "Specialization"] 
    const line = ["Developers"]
    const button = ["Add New Developer"]

    return (
        <section className='py-4'>
            <Outlet context={{headers, line, button}}/>
        </section>
    )
}
