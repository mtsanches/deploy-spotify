import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Ola Mundo !");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log("Iniciando a aplicacao...");
});

//Your current IP address (177.23.232.186)
//mauriciotadeusanches
//kMCewFc7WIiJ09Zd
//npm install mongodb
//mongodb+srv://mauriciotadeusanches:kMCewFc7WIiJ09Zd@cluster0.ah3rc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
