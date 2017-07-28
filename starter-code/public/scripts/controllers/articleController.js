'use strict';
var app = app || {};

(function(module) {
  const articleController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This is a function that takes in a current state object as an argument and passes it to articleView.index as an argument in which it targets the articles property of the ctx object. It is called multiple places within the routes.js file. This also calls the articleView.index function which lives in the articleView.js file in the 'views' folder.
  articleController.index = (ctx) => app.articleView.index(ctx.articles);

  // REVIEW: Middleware for grabbing one article by ID:
  articleController.loadById = (ctx, next) => {
    let articleData = article => {
      ctx.articles = article;
      next();
    };

    // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
    // Article.findWhere looks for an article based on the article id in the current query parameter and it sets it to then then returns it by calling articleData. This was declared in article.js and is being called right here. It is calling out the articleData function which lives in this file.
    app.Article.findWhere('article_id', ctx.params.article_id, articleData);
  };

  // REVIEW: Middleware for loading up articles by a certain author:
  articleController.loadByAuthor = (ctx, next) => {
    let authorData = articlesByAuthor => {
      ctx.articles = articlesByAuthor;
      next();
    };

    app.Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // REVIEW: Middleware for grabbing all articles with a certain category:
  articleController.loadByCategory = (ctx, next) => {
    let categoryData = articlesInCategory => {
      ctx.articles = articlesInCategory;
      next();
    };

    app.Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // REVIEW: Middleware for grabbing ALL articles:
  articleController.loadAll = (ctx, next) => {
    let articleData =  () => {
      ctx.articles = app.Article.all;
      next();
    };

    if (app.Article.all.length) {
      ctx.articles = app.Article.all;
      next();
    } else {
      app.Article.fetchAll(articleData);
    }
  };

  module.articleController = articleController;
})(app);
