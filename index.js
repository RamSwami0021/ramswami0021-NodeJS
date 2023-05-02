var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://0.0.0.0:27017/ramswami0021',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post('/sign_up',function(req,res){
    // taking a user
    const newuser=new User(req.body);
    
   if(newuser.password!=newuser.password2)return res.status(400).json({message: "password not match"});
    
    User.findOne({email:newuser.email},function(err,user){
        if(user) return res.status(400).json({ auth : false, message :"email exits"});
 
        newuser.save((err,doc)=>{
            if(err) {console.log(err);
                return res.status(400).json({ success : false});}
            res.status(200).json({
                succes:true,
                user : doc
            });
        });
    });
 });

 const users = [
    { id: 1, username: 'admin', password: 'admin' },
  ];
  
  // Login endpoint
  app.post('/api/login', (req, res) => {
    // Find user with matching username and password
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
  
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  
    // Return user data to client
    res.json({ id: user.id, username: user.username });
  });

app.post("/contact_form",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;

    var data = {
        "name": name,
        "email" : email,
        "subject": subject,
        "message" : message
    }

    db.collection('ContactUs').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Thank You For Contact Us");
    });

    return res.redirect('/')

})

app.get('/api/contact/list', (req, res) => {
    const collection = db.collection("ContactUs");
    
      // Find all documents in the users collection
      collection.find({}).toArray((err, docs) => {
        res.send(docs);
      });
  });

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(8080);



console.log("Listening on PORT 8080");