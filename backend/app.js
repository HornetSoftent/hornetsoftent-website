import express from 'express';
import cors from 'cors';
import data from './data/data.js';
import legal from "./data/legal.js"
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
app.get("/api/legal",(req,res)=>{
  
    
    
        res.json(legal);
   
})
app.get("/api/legal/:name",(req,res)=>{
    const formattedlegalLink = (str) => {
  return str
   .normalize("NFD") // Décompose les caractères accentués en caractères de base et leurs diacritiques
        .replace(/[\u0300-\u036f]/g, "") // Supprime les diacritiques (accents)
        .replace(/\s+/g, "-") // Remplace les espaces par des tirets
        .replace(/['’]/g, "-")
        .toLowerCase(); // Convertit la chaîne en minuscules

};
    const {name} = req.params
    const legalsData = legal.find(app=>formattedlegalLink(app.title) === formattedlegalLink(name))
     if (legalsData) {
        res.json(legalsData);
    } else {
        res.status(404).json({ message: "not found" });
    }
})
export default app
