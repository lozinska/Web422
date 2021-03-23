import React, {Component} from 'react';
import MainContainer from './MainContainer';
import axios from 'axios';
import moment from 'moment';
import './Projects.css';

class Projects extends Component{
    state={
projects:[]
    }
    componentDidMount(){
        axios.get("https://aqueous-ridge-27689.herokuapp.com/projects")
        .then((res)=>{
            this.setState({projects:res.data});
        })
    }
    render(){
        return(
    <MainContainer highlight="Projects">
          <h1 className="page-header">Projects</h1> 
          <div className="row">
          <table className="table table-striped table-bordered">
          <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.projects.map(project => {
                    let endDate ="";
                    if (project.ProjectEndDate==null) endDate="n/a";
                    else endDate = moment(project.ProjectEndDate).utc().format('LL');
                    return (
                        <tr key={project._id}>
                            <td>{project.ProjectName}</td>
                            <td>{project.ProjectDescription}</td>                            
                            <td>{moment(project.ProjectStartDate).utc().format('LL')}</td>
                            <td>{endDate}</td>
                        </tr>
                    );
                })}
                </tbody>
              </table>
          </div> 
          </MainContainer> 
            )}
}
export default Projects;
