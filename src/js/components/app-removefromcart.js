var React = require('react');
var AppActions = require('../actions/app-actions');

var RemoveFromCart =
  React.createClass({
  	clickHandler : function(){
  		AppActions.removeItem(this.props.index);
  	},
    render:function(){
      return <button onClick={this.clickHandler}>x</button>
    }
  });
module.exports = RemoveFromCart;