import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";

const style = {
  flexGrow: 3
};
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total_case: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
        {
          headers: {
            "x-rapidapi-key":
              "9b872049f1mshb6530d8e4522f3bp160365jsn788fb9734047"
          }
        }
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          total_case: response.data
        });
      });
  }

  render() {
    const { total_case } = this.state;
    return (
      <div>
        <div>
          <AppBar color="primary" position="static">
            <Toolbar>
              <TypoGraphy variant="title" color="inherit">
                <Spinner animation="border" variant="primary" />
              </TypoGraphy>

              <TypoGraphy variant="h6" style={style} color="inherit">
                <Button color="secondary">
                  <h2>Coronavirus info!</h2>
                </Button>
              </TypoGraphy>
            </Toolbar>
          </AppBar>
        </div>

        <Alert variant="info">
          <Container>
            <h2 className="danger">Coronavirus Summary:</h2>
            <Row>
              <Col xs>Total Cases : {total_case.total_cases}</Col>
              <Col xs={{ order: 12 }}>
                Total Deaths : {total_case.total_deaths}
              </Col>
              <Col xs={{ order: 1 }}>
                Total Recovered : {total_case.total_recovered}
              </Col>
              <Col xs>New Cases : {total_case.new_cases}</Col>
              <Col xs={{ order: 12 }}>New Deaths : {total_case.new_deaths}</Col>
            </Row>
          </Container>
        </Alert>

        <div>
          <FormControl>
            <Select
              multiple
              displayEmpty
              input={<Input />}
              renderValue={selected => {
                return <em>Placeholder</em>;
              }}
            ></Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default Header;
