import exp from 'express'
export const userApp=exp.Router()
let users=[]
//create API(rest api)  REST=representational state transfer

//route to handle get request of client(http://localhost:3000/users)
userApp.get('/users',(req,res)=>{
    //read all users and send response
    res.json({message:"all users",payload:users})
   
})
userApp.get('/users/:id',(req,res)=>{
   let idOfUrl=Number(req.params.id)
    let user=users.find(userObj=>userObj.id===idOfUrl)
    if(user===undefined)
    {
        return res.json({message:"user not found"})
    }
    res.json({message:"a user",payload:user})
})
//route to handle post request of client
userApp.post('/users',(req,res)=>{

//get user from client
const newUser=req.body
//push user int users
users.push(newUser)
//send res
res.json({message:"user created"})

})
//route to handle put request of client
userApp.put('/users',(req,res)=>{
   //get modifieed user from the client{}
   let modifiedUser=req.body;
   //get index of existing user in users
  let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
  //user not found
  if(index===-1)
  {
    return res.json({message:"user not found"})
  }
   //update the user with index
   users.splice(index,1,modifiedUser)
//send res
res.json({message:"user updated"})
})
//route to handle delete request of client
userApp.delete('/users/:id',(req,res)=>{ 
    //get id of user from url paramenter
let idOfUrl=Number(req.params.id)
    //findindex of user
    let index=users.findIndex(userObj=>userObj.id===idOfUrl)
    //if user not found
    if(index===-1)
        {
            return res.json({message:"user not found to delete"})
        }
    
    //delete index
    users.splice(index,1)
    //send res
    res.json({message:"user removed"})
})






