var React = require('react');
var AppActions = require('../actions/app-actions');

var AddToCart =
  React.createClass({
  	clickHandler : function(){
  		AppActions.addItem(this.props.item);
  	},
    render:function(){
      return <button onClick={this.clickHandler}>Add To Cart</button>
    }
  });
module.exports = AddToCart;