const express = require( 'express' );
const app = express()
app.use(express.json())

const server = app.listen(3003, ()=>{
    console.log("App lisening on port 3003")
})

let tasks = [
    {
        "id":1,
        "user":"Alice",
        "title":"AI assignment",
        "description":"ai assignment 2",
        "duedate":"28 march",
        "status":"pending",
        "category":"university",
        "priority":"high"
    },
    {
        "id":2,
        "user":"Alice",
        "title":"cnet theory",
        "description":"revise cnet lectures",
        "duedate":"sunday",
        "status":"pending",
        "category":"university",
        "priority":"medium"
    },
    {
        "id":3,
        "user":"Bob",
        "title":"sleep",
        "description":"sleep 9 hours over the weekend",
        "duedate":"-",
        "status":"pending",
        "category":"personal",
        "priority":"low"
    }
]

app.get( '/gettasks', (req, res)=>{ // route
    res.json(tasks);
})

app.get('/gettaskspriority/:user/:send/:value', (req,res)=>{
    let user = req.params.user;
    let send = req.params.send;
    let value = req.params.value;
    let priority;
    if(send == "priority"){
        priority = tasks.filter( tasks.priority == value && tasks.user == user);
    }else if (send == "category"){
        priority = tasks.filter( tasks.category == value && tasks.user == user);
    }else if(send == "status"){
        priority = tasks.filter( tasks.status == value && tasks.user == user);
    }
    res.json(priority);
})

app.post( '/tasks/create', (req, res)=>{ // route
    let data = req.body;
    tasks.push[data];
    res.json({message: "Task created successfully"})
})

app.put('/updatetask/:id', (req, res)=>{
    let id = req.params.id;
    let data = req.body;
    let taskss;
    data.forEach(element => {
        if(element.id == id){
            taskss=element; 
        }   
    });
    console.log(taskss);

    res.json({"Task Updated Successfully": tasks})
})

app.delete('/deletetask/:id', (req,res)=>{
    let id = req.params.id;
    let index = 0;
    data.forEach(element => {
        if(element.id == id){
            tasks.splice(index, 1);
        }
        index ++;
    })
    res.json({"Task Deleted Successfully": tasks})
})

// Automatically shut down after a specified time (e.g., 5 minutes)
setTimeout(() => {
    server.close(() => {
        console.log('Server shut down after timeout');
    });
}, 1000); // 300,000 ms = 5 minutes