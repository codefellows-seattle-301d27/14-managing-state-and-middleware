'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // DONE COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
        // ANSWER: It's getting the number of the words by each author, and appending each stat to the author's stats. It's called on this page, line 16 within the fetchAll() function. It calls the forEach() array method which lives here on this page, and it calls the .append() jQuery method, also living here, and within the .append() the template() function is being called which lives on line 7 of this page.
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
