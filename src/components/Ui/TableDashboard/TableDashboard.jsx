import {Link, useOutletContext} from 'react-router-dom'

export default function TableDashboard() {
     const {headers, line, button} = useOutletContext();
  return (
    <div className="container">
        <div className="d-flex justify-content-between mb-3">
            <h3>{line}</h3>
            <Link to="add" className="btn btn-primary">{button}</Link>
        </div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                 {headers.map((header) => (
                    <th>{header}</th>))}
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
