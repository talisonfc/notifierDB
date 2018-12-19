var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)
var bodyParse = require("body-parser")

clients = []
const host = '172.21.254.99'
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
    console.log(`client ${socket.client.conn.id} connected`)
    clients.push(socket)
    socket.emit("connection", socket.client.conn.id)
    socket.on("disconnect", ()=>{
        console.log(`client ${socket.client.conn.id} disconnected`)
    })
    /*
    socket.on("connect", (data)=>{
        searchClient(socket).then(sk=>{
            
        })
    })
    */
})


http.listen(port, host, ()=>{
    console.log(`Servidor iniciado na porta ${port}`)
})

function searchClient(socket){
    return new Promise((resolve, reject)=>{
        clients.forEach(sk=>{
            if(sk.client.conn.id==socket.client.conn.id){
                resolve(socket)
            }
        })
        reject(undefined)
    })
}