
var React = require('react');
var ReactDOM = require('react-dom');

var CtrlTextBox = React.createClass({
  render: function() {
    if (this.props.type == null) {
      var inputType = "text";
    } else {
      var inputType = this.props.type;
    }
  	return (
  	  <input type={inputType} onChange={this.props.handleChange} onKeyPress={this.props.handleKeyPress} />
  	);
  }
});

module.exports = CtrlTextBox;

