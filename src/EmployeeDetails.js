import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Employeelist from './Employee_json_list.json'

//This Component is a child Component of Customers Component
export default class EmployeeDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    const response =Employeelist.Employees.find(item => item.userId === id)
    console.log(response)
      this.setState({EmployeeDetails: response})
   
  };

  render() {
    if (!this.state.EmployeeDetails)
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.EmployeeDetails.userId}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.EmployeeDetails.firstName} {this.state.EmployeeDetails.lastName}</p>
          <p>Email : {this.state.EmployeeDetails.emailAddress}</p>
          <p>Phone : {this.state.EmployeeDetails.phoneNumber}</p>
          <p>City : {this.state.EmployeeDetails.region}</p>
          <p>Preffered full name : {this.state.EmployeeDetails.preferredFullName}</p>
          <p>Employee Id : {this.state.EmployeeDetails.employeeCode}</p>
          <p>Job Title : {this.state.EmployeeDetails.jobTitleName}</p>
        </Panel.Body>
      </Panel>
    </div>)
  }
}
