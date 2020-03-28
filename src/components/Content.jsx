import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      affected_countries: []
    };
  }
  componentDidMount() {
    fetch(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
      {
        mode: "cors",
        headers: {
          "x-rapidapi-key": "9b872049f1mshb6530d8e4522f3bp160365jsn788fb9734047"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        console.log(response.countries_stat);
        this.setState({
          isLoaded: true,
          affected_countries: response.countries_stat
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoaded: true, error });
      });
  }

  render() {
    const { error, isLoaded, affected_countries } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <Spinner animation="border" variant="info" />
        </div>
      );
    } else {
      return (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Country Name</th>
              <th>Total Cases</th>
              <th>Death</th>
              <th>Total Recovered</th>
              <td>New Deaths</td>
              <td>New Cases</td>
              <td>Serious Critical</td>
              <td>Active Cases</td>
            </tr>
          </thead>
          <tbody>
            {affected_countries.map(country => (
              <tr key={country.country_name}>
                <td>{country.country_name}</td>
                <td> {country.cases}</td>
                <td> {country.deaths}</td>
                <td>{country.total_recovered}</td>
                <td>{country.new_deaths}</td>
                <td> {country.new_cases}</td>
                <td> {country.serious_critical}</td>
                <td> {country.serious_critical}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }
  }
}

export default Content;
