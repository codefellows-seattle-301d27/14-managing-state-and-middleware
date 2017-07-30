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

  // COMMENT:DONE What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //repoView.index first calls ui() which empties the about 'ul' elements and then shows
  //the 'ul's siblings. this .index() function then renders and appends repos
  //with 'name' attributes
  //this method is called as a callback of repos.requestRepos, because when the requestRepos
  //method returns the repo objects, this method will render them
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
