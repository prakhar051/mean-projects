const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

mongoose.connect('mongodb://127.0.0.1:27017/Blogss')
    .then(() => {
        console.log("my db is connected");
    })
    .catch((err) => {
        console.log("the db is not connected");
    });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))  //body parsing middleware -> formdata

// Task 1: Display all the blogs
app.get('/blogs', async (req, res) => {
    let allBlogs = await Blog.find({});
    res.render('index', { allBlogs });
});

app.get('/blog/new', (req, res) => {
    console.log("New blog form route hit");
    res.render('new');
});


// actually adding in the db
app.post('/blogs' ,async(req,res)=>{
    let {title , author , comment} = req.body;
    let newBlog = await Blog.create({title , author , comment});
    res.redirect('/blogs')
 })

 
 //show a particular blog
 app.get('/blogs/:id' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Blog.findById(id);
    res.render('show' , {foundProduct})
})
//edit
app.get('/blogs/:idd/edit' , async(req,res)=>{
    let {idd} = req.params;
    let foundProduct =  await Blog.findById(idd);
    res.render('edit' , {foundProduct});
})

//update a blog
app.patch('/blogs/:id' , async(req,res)=>{
    let {id} =  req.params;
    // console.log(req.params.id);
    let {comment} = req.body;
    // console.log(req.body.comment)
    await Blog.findByIdAndUpdate(id , {comment});
    res.redirect('/Blogs')
})

// deleting
app.delete('/blogs/:id' , async(req,res)=>{
    let {id} =  req.params;
    await Blog.findByIdAndDelete(id);
    res.redirect('/blogs')
})

app.listen(2020, () => {
    console.log("the server is connected to 8080");
});
