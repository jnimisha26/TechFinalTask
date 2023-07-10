const express = require("express")
const app = express();
const path = require("path");
const logger = require("morgan");
const session = require("express-session");
require("dotenv").config();
const multer = require("multer");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/user.js");
const Post = require("./models/post.js");
const Comment = require("./models/comment.js");


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"))
app.use(bodyParser.json()) ;
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(session({
    cookie: {
        path: "/",
        httpOnly: false
    },
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}))

//multer storage

const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: Storage
}).single('filename')

//connection mongodb
mongoose.connect(process.env.MONGO_URL, {})
    .then(() => console.log("Connected"))
    .catch((error) => console.log(error));

app.listen(3000, () => {
    console.log("local host on 3000")
});


//API Controllers

app.get("/", (req, res) => {
    res.render('signup.ejs');
});

app.post('/', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            contact: req.body.contact
        });
        await  user.save();
        console.log(user);
        res.redirect('/');
    }
    catch (err) {
        console.log('Error inserting user:', err);
        res.status(400).send('Internal Server Error');
    }
});
//signin 
  app.get("/signin", (req, res) => {
    res.render("signin.ejs");
  });
  app.post("/signin", async (req, res) => {
    await User.find({ email: req.body.email })
      .then((data) => {
        if (req.body.password == data[0].password) {
          req.session.user = data[0];
          res.redirect("/myprofile");
        } else {
          res.redirect("/signin");
        }
      })
      .catch((err) => {
        console.error(err);
      });
});
// my prof 
app.get('/myprofile', async (req,res) =>{
    // catch undefined error in my profile 
    await User.findById(req.session.id).then(user =>{
        res.render('profilemain.ejs',{
            user : user
        }).catch((err)=>{
            console.log(err)
        });
    });
//    await res.render('profilemain.ejs');
    });
  app.post('/myprofile',upload, async (req, res)=>{

    // const userId = req.params.id;
    const userId = "64ac1dede26870cdfcecfe93";
    let postimg;
    if(req.file){
        postimg = req.file.filename;
    } else{postimg = undefined}
    // const  {caption} = req.body;

    try{
        const { caption }= req.body;
        const post = new Post({
            author: userId,
            caption ,
            postimg,
        })
        await post.save();
        res.redirect('/myprofile');
        console.log(post);
        console.log("post Created");
        if(!post){
                res.redirect('/myprofile');
                res.json({message: "error in saving post"})
        }
    }
    catch (err) {
        console.log( err);
        res.status(400).send('Error in creating post');
    }
  });
// update prof 

app.get('/updateprofile', async (req,res)=>{
    await User.findById('64ac1dede26870cdfcecfe93').then(user =>{
        res.render('profileupdate.ejs',{
        user: user
        });
    })
});
app.put('/updateprofile', upload, async (req, res) => {
    // const id = req.params.id;
    id = '64ac1dede26870cdfcecfe93';
    try {
        const {
            username ,
            location,
            occupation,
            contact, 
            email,
        }= req.body
        const profile = req.file ? req.file.filename : undefined;

        const updatedProfile = { username , location , occupation , profile, contact, email}
        const updatedUser = await User.findOneAndUpdate(
            {_id : id } ,
            {$set : updatedProfile},{new : true}
        ).then((result)=>{
            console.log(result);
            console.log(updatedUser);
            res.redirect('/myprofile') ;
        })
    }
    catch(err){
        res.redirect('/signup');
        res.status(400).json({message : ' server error' , err})
    }
  })
// feed get 
app.get('/feed', async (req,res)=>{
    await Post.find().then((result)=>{
        res.render('feed.ejs',{
            posts:result
        })
    })
})
