const express= require('express');
const server =express();

//custome middleware 
server.use((req,res,next)=>{
  console.log('server hit');
  next();
});
//middlewares 
server.use(express.json()); // For parsing JSON data
server.use(express.urlencoded({ extended: true })); // form json parser

server.get('/',(req,res)=>{
  console.log('1');
  res.send(' I am alive');
})

server.get('/momo',(req,res)=>{
  console.log(2);
  res.send(' I love momo');
})

server.get('/momo/love/:type' ,(req,res) =>{
  console.log(3);
  // http://localhost:3000/momo/love/anj?stretht=20&width=40
  // console.log(req.params);
  // console.log(req.query);
  res.send(`<h1 style="color:red;">MOMO is my love at first sight: ${req.params.type}  </h1>`)
});

server.post('/momo',(req,res)=>{ 
  console.log(4);
  console.log(req.body);
  res.send(req.body)
})




//at lst start litening
server.listen(3000,()=>{
  console.log("I am ready . I am Listenign at port 3000");
})