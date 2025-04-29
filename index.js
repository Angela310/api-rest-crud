import"dotenv/config";
// facilita la creacion de servidores
import express from "express";
import indexRoutes from "./routes/indexroutes.js"
import userRoutes from "./routes/usersroutes.js"
import cors from "cors";
import morgan from "morgan";

console.log('DEBUG:', process.env.DB_USER, process.env.HOST, process.env.DATABASE, process.env.PASSWORD);


const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());

// voy a tomar el objeto ruta (objeto que gestiona las peticiones)
app.use(indexRoutes);
app.use(userRoutes);

const PORT = 5001;

app.listen(PORT, () => console.log("http://localhost:" + PORT));

// npm es un manejador de paquetes, todos los lenjauges tienen algo similar (node package manager)
// node package manager install, va a buscar un archivo package.json