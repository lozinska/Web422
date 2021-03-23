import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';

class EmployeesPanel extends Component{
state={
    employees:[]
};
componentDidMount(){
    axios.get("https://aqueous-ridge-27689.herokuapp.com/employees")
    .then((res)=>{
        this.setState({employees:res.data});
    })
}
render(){
    return(
        <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Employees</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {this.state.employees.map(employee=>{
                    return(
                        <tr key={employee._id}>
                            <tb>{employee.FirstName+' '+employee.LastName}</tb>
                            <tb></tb>
                        </tr>
       
                     )
                })}
              </tbody>
            </table>
          </div>
          <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
        </div>
      </div>
    )
}
}
export default EmployeesPanel;