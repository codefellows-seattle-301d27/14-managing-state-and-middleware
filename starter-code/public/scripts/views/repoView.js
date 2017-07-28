'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // COMMENT: DONE What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //1. This function is displaying the repo content in the about section.
  //2. This function is called in the aboutController.js (as a callback function) to requestRepos in repos.js.
  //3. Yes, it is calling the ui() function which is defined above here in repoView.js.
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
