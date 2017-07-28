'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  // This function targets the 'about' id listed in the index.html in which it will show the about section and hides all other elements that are on the same level as itself. It is called out on the routes.js page and is activated when clicking on the about navigation button on the home page. This function calls the repos.requestRepos function which has the repoView.index function as a parameter. Repos.requestRepos lives in the repo.js file within the model folder, while repoView.index lives in the repoView.js file within the 'views' folder
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
