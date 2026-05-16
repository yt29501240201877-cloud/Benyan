import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import TableDashboard from "../../components/Ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/Ui/FormDashboard/FormDashboard"
import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";
import Developers from "./Developers";

function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />
        <div className="d-flex">
          <Sidebar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<StatusPage/>}/>

              <Route path="/Users" element={<Users/>}>
                <Route index element={<TableDashboard/>}/>
                <Route path="add" element={<FormDashboard/>}/>
              </Route>

              <Route path="/Projects" element={<Projects/>}>
                <Route index element={<TableDashboard/>}/>
                <Route path="add" element={<FormDashboard/>}/>
              </Route>

              <Route path="/Developers" element={<Developers/>}>
                <Route index element={<TableDashboard/>}/>
                <Route path="add" element={<FormDashboard/>}/>
              </Route>

            </Routes>
          </main>
        </div>
      <Footer />
    </>
  );
}

export default Dashboard;
