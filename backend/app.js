import express from 'express';
import cors from 'cors';
import data from './data/data.js';
const app = express();


app.use(cors());
app.use(express.json());

app.get("/api/apps",(req,res)=>{
    res.json(data)
})
const formattedLink =(str)=>{
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(" ","").toLowerCase();
}
app.get("/api/apps/:appName",(req,res)=>{
    const { appName } = req.params;
    const appData = data.find(app => formattedLink(app.appName) === formattedLink(appName));
    
    if (appData) {
        res.json(appData);
    } else {
        res.status(404).json({ message: "Application not found" });
    }
})
export default app
