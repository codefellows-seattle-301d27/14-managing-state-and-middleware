'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE.COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  // It shows the 'about' setion and hide the sibling setion.  It is called in routes.js.
  // It calls two functions: app.repos.requestRepos from repo.js and app.repoView.index from repoView.js.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
