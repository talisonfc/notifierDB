var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

clients = []

app.get("/", (req, res)=>{
    "hello worl"
})

app.get("/send", (req, res)=>{
    application = req.query.application
    data = req.query.data

    if(application != undefined){
        clients[0].emit("message", data)
    }
    
    console.log(application)
    res.end("hello world send")
})

io.on("connection", (socket)=>{
    console.log(socket.client.conn.id)
    clients.push(socket)
    socket.emit("connection", socket.client.conn.id)
})

function send(id, socket){
    // setTimeout(()=>{
    //     socket.emit("messege", `tudo bem ${id}`)
    //     send(id+1, socket)
    // },1000)
}

http.listen(8080)