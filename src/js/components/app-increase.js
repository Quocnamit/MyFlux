var React = require('react');
var AppActions = require('../actions/app-actions');

var Increase =
  React.createClass({
  	clickHandler : function(){
  		AppActions.increaseItem(this.props.index);
  	},
    render:function(){
      return <button onClick={this.clickHandler}>+</button>
    }
  });
module.exports = Increase;