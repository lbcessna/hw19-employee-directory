import React, { Component } from "react";
import API from "../../utils/API";
import { Table } from "react-bootstrap";
import NavBar from "../NavBar";
import EmployeeInfo from "../EmployeeInfo";
import moment from "moment";

export default class EmployeeContainer extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
  };

  componentDidMount() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    API.search()
      .then((res) => {
        let allEmployees = res.data.results.map((employee) => {
          return {
            image: employee.picture.thumbnail,
            name: employee.name.first + " " + employee.name.last,
            phone: employee.phone,
            email: employee.email,
            dob: moment(employee.dob.date).format("MMM Do YYYY"),
            age: moment().diff(
              moment(employee.dob.date).format("YYYY"),
              "years"
            ),
            id: employee.id.value,
          };
        });
        this.setState({
          employees: allEmployees,
          filteredEmployees: allEmployees,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <Table striped bordered hover size="lg">

          <tbody>
            {this.state.filteredEmployees.map((employee) => (
              <EmployeeInfo
                key={employee.id}
                id={employee.id}
                name={employee.name}
                image={employee.image}
                phone={employee.phone}
                email={employee.email}
                age={employee.age}
                dob={employee.dob}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}