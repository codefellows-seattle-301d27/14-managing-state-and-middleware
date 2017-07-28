'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // COMMENT: DONE What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
        //(this init function is setting up the admin page, it uses handlebars to fill the template and for each author it is giving a word count and appending it to the author-stats section. it calls the numWordsByAuthor function which lives in article.js )
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
