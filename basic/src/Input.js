import React from "react";

export default class Input extends React.Component {
  handleClick(event) {}
  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value.length < this.state.value.length) {
      // this.setState({ suggestions: this.props.data });
      this.state.suggestions = this.props.data;
    }
    this.handleSuggestions(event);
  }
  handleSuggestions(event) {
    let temp = [];
    this.state.suggestions.forEach(element => {
      if (element.startsWith(event.target.value)) {
        temp.push(element);
      }
    });
    this.setState({ suggestions: temp });
  }
  state = {
    value: "",
    suggestions: this.props.data
  };
  render() {
    var liststyle = {
      listStyleType: "none"
    };
    return (
      <div>
        <input
          onClick={this.handleClick.bind(this)}
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        />
        <ul style={liststyle}>
          {this.state.suggestions.map(suggest => (
            <div>
              <li>{suggest}</li>
              {/* <li>{this.state.value}</li> */}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
