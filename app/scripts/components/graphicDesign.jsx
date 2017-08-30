var React = require('react');
var ReactDom = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var ProjectCollection = require('../models/project.js');
var projectCollection = new ProjectCollection();


var ProjectContainer = React.createClass({
  componentDidMount:function(){
    projectCollection.fetch();
    console.log(projectCollection);
  },
  render:function(){
    return(
      <h1> Stuff is Rendering</h1>
    );
  }
});

module.exports=ProjectContainer;
