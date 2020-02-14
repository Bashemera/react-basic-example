import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import EmployeeDetails from './EmployeeDetails'
import Employeelist from './Employee_json_list.json'

export default class Employees extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedEmployee: "rirani"
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getEmployeeData();
  }

  //Function to get the Customer Data from json
  getEmployeeData() {
      const response =
      this.setState({Employeelist: Employeelist})
      console.log(response)
   
  };

  render() {
    if (!this.state.Employeelist)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {

          this.state.Employeelist.Employees.map(employee => <Panel bsStyle="info" key={employee.userId} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{employee.firstName} &nbsp;{employee.lastName}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{employee.emailAddress}</p>
              <p>{employee.phoneNumber}</p>
              <Button bsStyle="info" onClick={() => this.setState({selectedEmployee: employee.userId})}>

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-6">
        {<EmployeeDetails val={this.state.selectedEmployee}/>}
      </div>
    </div>)
  }

}
