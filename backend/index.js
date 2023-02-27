    // Importações
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

    // Links DataBase
const DB_URL = "mongodb+srv://admin:admin1234@cluster0.3cde2jf.mongodb.net/";
const DB_NAME = "nodeJs_Project1_Database";

async function main() {

        // Conexão com o DataBase
    console.log("Conectando com o banco de dados...");
    const client = await MongoClient.connect(DB_URL);
    const db = client.db(DB_NAME);
    const collection = db.collection("times");
    console.log("Banco de dados conectado com sucesso!"); 

    const app = express();

        // Habilita o CORS
    app.use(cors());

        // Passar o body da requisição para JSON
    app.use(express.json());

        // Read All Endpoint
    app.get("/times", async function (req, res) {
        const resReadAll = await collection.find().toArray();
        res.send(resReadAll);
    });

        // Read Single by ID Endpoint
    app.get("/times/:id", async function (req,res) {
        const id = req.params.id;
        const time = await collection.findOne({ _id: new ObjectId(id) });
        res.send(time);
    });

        // Create Endpoint
    app.post("/times", async function (req, res){
        const time = req.body;
        await collection.insertOne(time);
        res.send(time);
    });

        // Update Endpoint
    app.put("/times/:id", async function (req, res) {
        const id = req.params.id;
        const body = req.body;
        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: body }
        );
        res.send(body);
    });

        // Delete Endpoint
    app.delete("/times/:id", async function (req, res) {
        const id = req.params.id;
        await collection.deleteOne({ _id: new ObjectId(id) });
        res.send("Registro removido com sucesso!");
    });

        // Porta de Saída
    const port = process.env.PORT || 3000;
    app.listen(port, function () {
        console.log("Servidor rodando na porta: " + port);
    });

}

main()