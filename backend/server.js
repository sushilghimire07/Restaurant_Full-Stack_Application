import app from "./app.js";


app.listen(process.env.PORT,()=>{
    console.log(`Server running in PORT : ${process.env.PORT}`)
})