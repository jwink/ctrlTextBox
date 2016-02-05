
var React = require('react');
var ReactDOM = require('react-dom');

var CtrlTextBox = React.createClass({
  render: function() {  	
  	return (
  	  <input type="text" onChange={this.props.handleChange} onKeyPress={this.props.handleKeyPress} />
  	);
  }
});

module.exports = CtrlTextBox;

