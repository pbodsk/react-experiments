import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name] : value
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const {name, job} = this.state;

    return (
      <form>
          <label>Name</label>
          <div class="input-group">
          <input
            class="form-control"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            />
          </div>
          <label>Job</label>
          <div class="input-group">
            <input
            class="form-control"
            type="text"
            name="job"
            value={job}
            onChange={this.handleChange}
          />
          </div>
        <input
          type="button"
          value="Submit"
          class="btn btn-primary"
          onClick={this.submitForm}
        />

      </form>
    );
  }

}

export default Form
