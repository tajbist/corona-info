import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
class ByCountry extends Component {
  render() {
    return (
      <div>
        <h3> Statistics By Country</h3>
        <div>
          <div>
            <TextField
              id="standard-full-width"
              label="Country Name"
              style={{ margin: 8 }}
              placeholder="Country Name"
              margin="normal"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ByCountry;
