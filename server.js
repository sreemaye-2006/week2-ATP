//create the http server
import exp from 'express'
const app=exp()
import {userApp} from "./API/userapi.js";
import {productApp} from "./API/productapi.js";
//use body parser middleware
//this is created by express application
app.use(exp.json())

//can create custom middleware
function middleware1(req,res,next){
    // //send res form middleware
    // res.json({message:"this res from middleware1"})
    // next();
    console.log("middleware1 executed")
    next();
}
//should call the function to use middleware 
//use middleware1
app.use(middleware1)

function middleware2(req,res,next){
        // res.json({message:"this res from middleware2"})
    console.log("middleware2 executed")
next();
}

app.use(middleware2)
//forward req to userApi if starts with user-api
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//set a port number
const port=3000
//assign port number to HTTP server
app.listen(port,()=>console.log(`server listening to port ${port}...`))


//Test data(in future should be replaced with test data)
