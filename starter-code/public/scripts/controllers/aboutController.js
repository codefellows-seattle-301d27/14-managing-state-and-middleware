'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  //  This function shows the about section and it hides all other sections which are sibblilings to about section which live in the main tag.
  //  It is being called in the routes.js file
  //  It calls requestRepos method on app.repos which lives in the repo.js file.
  //

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
