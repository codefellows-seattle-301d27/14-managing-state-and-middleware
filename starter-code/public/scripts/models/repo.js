'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // ANSWER: This function is requesting all repos from whichever user in request and saving data into repos.all array.  It is called in the aboutController.  It calls 2 other anonymous functions that live right here within the requestRepos function.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
