const app = express()
app.get("/",(req,res)=>{
    res.redirect("google.com")
})