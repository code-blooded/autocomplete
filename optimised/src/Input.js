import React from "react";
import { constructTRIE, getChildren, moveUp, moveDown } from "./trie";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.trie = constructTRIE(this.props.data);
    // console.log(this.trie);
  }
  componentDidMount() {
    this.setState({ suggestions: getChildren(this.trie) });
  }
  handleClick(event) {}
  handleChange = event => {
    this.setState({ value: event.target.value });
    if (event.target.value.length < this.state.value.length) {
      this.trie = moveUp(this.trie);
      // this.setState({ suggestions: getChhildren(moveUp(this.trie)) });
    } else {
      this.trie = moveDown(this.trie, event.target.value.substr(-1));
      // this.setState({ suggestions: getChildren(moveDown(this.trie)) });
    }
    this.state.suggestions = getChildren(this.trie);
    // CREATE A STACK TO AVOID RE-EVALUATING
    // ALSO SOLVES THE ISSUE AT THE END OF STRING
    prevSuggestions.push({});
    console.log(this.state.suggestions);
  };
  // NEED TO CONSIDER THE USE CASE OF INSERT IN BETWEEN
  // NEED TO RENDER ONLY TOP K
  state = {
    value: "",
    suggestions: [],
    prevSuggestions: []
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
              <li>{this.state.value + suggest}</li>
              {/* <li>{this.state.value}</li> */}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
