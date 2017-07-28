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

  // COMMENT: What is this function doing? Where is it called?
  // Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // repoView.index() empties, shows, and hides via ui(). Then it appends mapped repos via app.repos()
  // and renders them. It is called in aboutController.js and is used as a callback function
  // app.repos.requestRepos in aboutController.js. It calls ui(), which lives in this file,
  // append() and with() and map() which are built-in funcitons, and render(), which also lives in this file.
  // est 5min act 10min
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
