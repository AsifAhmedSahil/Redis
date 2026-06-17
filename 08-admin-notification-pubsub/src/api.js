import express from 'express'
import {emailQueue} from "./queue.js"

const app = express()

app.use(express.json());

// publisher - update
const publisher = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

app.post("/notifications",async(req,res)=>{
    const payload = {
        title: req.body.title || "Default Title",
        createdAt: new Date().toISOString()
    }
    const receivers = await publisher.publish(
        "notifications",
        JSON.stringify(payload)
    )

    res.json({message:`Notification sent to ${receivers} subscribers`})
})


app.listen(3000,()=>{
    console.log("Sever running on http://localhost:3000")
})