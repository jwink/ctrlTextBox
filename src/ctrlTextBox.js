
var React = require('react');
var ReactDOM = require('react-dom');

var CtrlTextBox = React.createClass({
  render: function() {
    if (this.props.metaObj.type == null) {
      var inputType = "text";
    } else {
      var inputType = this.props.metaObj.type;
    }
    return (
      <div>
        <div className="row make-blue">
          {this.props.ctrlLabel}
        </div>
        <div className="row">
          <input type={inputType}
                 className={this.props.metaObj.eleClass}
                 placeholder={this.props.metaObj.placeholder}
                 onChange={this.props.handleChange}
                 onKeyPress={this.props.handleKeyPress}
                 defaultValue = {this.props.defaultValue}
                 name={this.props.metaObj.name} />
        </div>         
      </div>       
    );
  }
});

module.exports = CtrlTextBox;

