const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');



app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/CSS")));
app.use(express.static(path.join(__dirname, "public/JS")));
app.use(methodOverride("_method"));

let users = [
    {
        id: uuidv4(),
        username: "ViratKohli",
        bio: "Cricket Captain, Fitness Enthusiast, Entrepreneur",
        img: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png"
    },
    {
        id: uuidv4(),
        username: "AnjaliArora",
        bio: "Social Media Influencer, Fashion & Lifestyle",
        img: "https://www.thestatesman.com/wp-content/uploads/2023/06/Statesman-97.jpg"
    },
    {
        id: uuidv4(),
        username: "AmanDhattarwal",
        bio: "Educator, Entrepreneur, Motivational Speaker",
        img: "https://qph.cf2.quoracdn.net/main-qimg-25dab0d16abe5332920f85a862a7274b-lq"
    },
    {
        id: uuidv4(),
        username: "ShraddhaKhapra",
        bio: "Tech Educator, Content Creator, Co-Founder Apna College",
        img: "https://yt3.googleusercontent.com/C3fYEwQskO0SjgK_gsqHvzfvvB1Sx1bKnTek7wu4RnKA-L-c_0zLJntGWDhOOlBbbOAL5R2OfJY=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: uuidv4(),
        username: "CarryMinati",
        bio: "YouTuber, Streamer, Content Creator, Roasting King",
        img: "https://indianewengland.com/wp-content/uploads/2023/08/CarryMinati-1.png"
    }
];

app.get("/users",(req,res)=>{
    res.render("users.ejs", {users});
});

app.get("/create", (req, res)=>{
    let id = uuidv4();
    res.render("createAcc.ejs", {id});
});

app.post("/create/", (req, res)=>{
    let id = uuidv4();
    let {username,img, bio} = req.body;
    console.log({username,img, bio});
    users.push({username,bio,id,img})
    res.redirect("http://localhost:8080/users");
});

app.get("/visit/:id", (req, res)=>{
    let {id} = req.params;
    let profile = users.find((p) => p.id === id);

    res.render("visit.ejs",{profile});
});

app.patch("/users/edit/:id", (req, res)=>{
    let {id} = req.params;
    let profile = users.find((p) => p.id === id);

    let newUserName = req.body.username;
    let newImage = req.body.img;
    let newBio = req.body.bio;

    if (!profile) {
        // Render error.ejs if the profile with the given id is not found
        return res.status(404).render("error", { message: "User not found" });
    }
    
        profile.username = newUserName;
        profile.img = newImage;
        profile.bio = newBio;
        console.log(newUserName);
        console.log("Editer succesfully");
        console.log(newUserName);
        res.redirect("/users");
});

app.get("/users/edit/:id", (req, res)=>{
    let {id} = req.params;
    let profile = users.find((p)=> id === p.id);
    res.render("Edit-Post.ejs",{profile});
});

app.delete("/users/:id", (req, res)=>{
    let {id} = req.params;
    users = users.filter((p)=> id !== p.id);
    console.log("Deleted Sucessfully!!");
    res.redirect("/users");
});

app.use("/*",(req,res)=>{
    res.render("error.ejs");
});

app.listen(port, (req, res)=>{
    console.log("Machine Started ====>>>>");
})