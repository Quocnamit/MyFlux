var React = require('react');
var AppActions = require('../actions/app-actions');

var Decrease =
  React.createClass({
  	clickHandler : function(){
  		AppActions.decreaseItem(this.props.index);
  	},
    render:function(){
      return <button onClick={this.clickHandler}>-</button>
    }
  });
module.exports = Decrease;