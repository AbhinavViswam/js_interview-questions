const events = require("events")
const eventEmitter = new events();

eventEmitter.on("hello",()=>{
    console.log("Helloo, Good Morning")
})

eventEmitter.emit("hello")