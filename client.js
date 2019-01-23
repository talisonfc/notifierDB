var io = require("socket.io-client")

const host = '172.21.254.99'
const socket = io(`http://${host}:8080`)
//const socket = io("http://172.21.254.99:8080")

client_id = ""

socket.on("connection", (id)=>{
    client_id = id
    console.log(client_id)
})

socket.on("message", (data)=>{
    console.log(data)
})