const express = require('express')
const app = express()
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blogs', { // Connection to database
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.set('view engine', 'ejs');

app.use('/articles',articleRouter);

app.get('/', (req,res)=>{
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

app.listen(3000,()=>{
    console.log('server listening ...')
});

