'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT:DONE What is this function doing? Where is it called?
  //Does it call any other functions, and if so, in what file(s) do those function(s) live?

  //This is wrapped in an immediately invoked function,
  //it is called on the routes.js page will show the section with the #about id and then
  //hide that element's siblings, it will then call the requestRepos method on the
  //repos object and pass in a callback of repoView.index, which will populate the
  //DOM with the repos that were returned and parsed.

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
