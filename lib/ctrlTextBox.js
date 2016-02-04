
var React = require('react');
var ReactDOM = require('react-dom');


var CtrlTextBox = React.createClass({
  render: function() {
  	/*
  	return (
  	  <input type="text"/>
  	);
*/
	return React.createElement('input',{"type": "text"});
  }
});



module.exports = CtrlTextBox;

