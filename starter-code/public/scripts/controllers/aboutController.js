'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: DONE What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  /* ANSWER:
  1) This method is showing the 'about' content, and hiding the content of it's sibblings (article content).
  2) This is called in routes.js
  3) This function calls requestRepos() which lives in repo.js.
  */
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
