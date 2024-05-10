const express = require('express')
const cors = require('cors');
const axios = require('axios'); // Importar axios aquí
const dbConnection = require('../database/database.js');

class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.productsPath = '/api/products' //localhost:8080/api/products       

        //exec middles
        this.middlewares();

        //routes

        this.routes();

        //initialize db
        this.connectDb();

        // Obtener y mostrar el precio del dólar
        this.fetchDollarPrice();

    }

    async connectDb(){
        await dbConnection();
    }

     // Middleware personalizado para registrar las solicitudes entrantes
     requestLogger(req, res, next) {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        next();
    }

    middlewares(){

        this.app.use(express.json())

        this.app.use(express.static('public'))

        this.app.use(cors())

        this.app.use(this.requestLogger); // Agregamos el middleware de registro de solicitudes

    }

    routes(){

        this.app.use(this.productsPath, require('../routes/products.js'))

    }

    async fetchDollarPrice() {
        try {
            const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
            if (response.status === 200) {
                const { rates, base } = response.data;
                const usdPrice = rates['ARS']; // Cambia 'COP' por el código de tu moneda local
                console.log(`El precio del dólar es: ${usdPrice} ${base}`);
            } else {
                console.error('Error al obtener el precio del dólar:', response.statusText);
            }
        } catch (error) {
            console.error('Error al conectarse con la API:', error.message);
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`server running in port ${this.port}`);
        });
    }

}

module.exports = Server;