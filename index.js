var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)
var bodyParse = require("body-parser")

clients = []
const port = 8080

app.use(bodyParse.json())

app.get("/", (req, res)=>{
    "notifyDB ONLINE"
})

app.post("/send", (req, res)=>{

    data = req.body
    console.log(data)
    if(data!=undefined){
        io.emit("message", JSON.stringify({payload: data}))
    }
    else{
        io.emit("message", JSON.stringify({payload: null}))
    }

    res.json({result: "data sent"})
})

io.on("connection", (socket)=>{
    console.log(socket.client.conn.id)
    clients.push(socket)
    socket.emit("connection", socket.client.conn.id)
    socket.on("disconnect", ()=>{
        console.listen("disconnecting")
    })
})


http.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`)
})