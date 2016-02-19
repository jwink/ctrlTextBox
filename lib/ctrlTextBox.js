'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var CtrlTextBox = React.createClass({
  displayName: 'CtrlTextBox',

  render: function render() {
    if (this.props.metaObj.type == null) {
      var inputType = "text";
    } else {
      var inputType = this.props.metaObj.type;
    }
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'row' },
        'Hello, World'
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement('input', { type: inputType,
          className: this.props.metaObj.eleClass,
          placeholder: this.props.metaObj.placeholder,
          onChange: this.props.handleChange,
          onKeyPress: this.props.handleKeyPress,
          defaultValue: this.props.defaultValue,
          name: this.props.metaObj.name })
      )
    );
  }
});

module.exports = CtrlTextBox;