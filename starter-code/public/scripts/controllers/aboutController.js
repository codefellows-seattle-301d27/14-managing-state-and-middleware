'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  // ANSWER: It's showing the about section while hiding all of that section's siblings, it's also getting the repos, then rendering them. It's called on routes.js.  It contains 2 other functions: requestRepos() which lives on repo.js, and repoView.index() which lives on repoView.js.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
