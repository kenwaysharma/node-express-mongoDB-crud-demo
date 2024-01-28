require("dotenv").config(); 
const express = require('express');
const { default: mongoose } = require('mongoose');
const User = require("./models/User");
const app = express()
var bodyParser = require('body-parser');
const logger = require("./middleware/logger");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger)
//Database connection
mongoose.connect(
    process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(res=>console.log("MongoDB Atlas connected!"))
.catch(err=>console.log("Connection error with mongoDB Atlas"));

//Hello world
app.get('/', (req,res)=>{
    res.send("Hello world this works!")
})

// GET /users
app.get('/users', async(req,res)=>{
    
    const allUsers = await User.find().select(['-password'])
    
   res.json(allUsers)
})
// POST /users
app.post('/users', async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            country: req.body.country
        }

        const user = new User(data);
        await user.save();
        res.send("User saved!");
    } catch (err) {
        res.send(err);
    }
});

// PUT /users/:id
app.put('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        let user = await User.findById(userId);
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.password = req.body.password || user.password;
            user.age = req.body.age || user.age;
            user.country = req.body.country || user.country;

            await user.save();
            res.send("User updated!");
        } 
    } catch (err) {
            res.status(404).send("User not found");
    }
});


// DELETE /users/:id
app.delete('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await User.findByIdAndDelete(userId);
        res.send("User deleted!");
    } catch (err) {
        res.send("User not found");
    }
});

app.listen(4000, ()=> console.log("Server started"))