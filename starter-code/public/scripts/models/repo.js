'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // RESPONSE: This function is doing a GET ajaz call to the backend to get the repose fromt he GitHub API. It is called by the aboutController. The only function that it calls it the callback function. When it is called, the callback is defined as app.repoView.index, which inits the about page with the github data.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
