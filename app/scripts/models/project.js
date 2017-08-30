var Backbone = require('backbone');

var ProjectModel = Backbone.Model.extend({

});

var ProjectCollection = Backbone.Collection.extend({
  model:ProjectModel,
  url:"https://api.behance.net/v2/users/awadewilli/projects?client_id=xk2uczPpGVYEUucOvaIAGMLMkqn8JiII"
});

module.exports = ProjectCollection;
