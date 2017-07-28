'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: DONE What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (It is showing about section and hiding others. It is called from routes.js. It calls app.repos.requestRepos which is in the repo.js file. The repoView is in the repoView.js file.)
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
