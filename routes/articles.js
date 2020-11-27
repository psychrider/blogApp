const express = require('express')
const router =  express.Router()

const Article = require('./../models/article.js')

router.get('/new', (req,res)=>{
    res.render('articles/new.ejs',{});
})

router.post('/',()=>{
    article = new Article;
    
})



router.get('/', (req,res)=>{
    // var article = 'This is HTML';
    // res.render('index.ejs', {text : article});

    var articles = [{
        title: "Article-1",
        createdAt: new Date(),
        description: "Test Description"
    },
    {
        title: "Article-2",
        createdAt: new Date(),
        description: "Test Description-2"
    },
    {
        title: "Article-3",
        createdAt: new Date(),
        description: "Test Description-2 Gibberish"
    }
    ];

    res.render('articles/index.ejs', {articles : articles}) //index will hae access to all the articles

});


module.exports = router