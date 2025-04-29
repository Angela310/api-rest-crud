import"dotenv/config";
import express from "express";
import indexRoutes from "./routes/indexroutes.js"
import userRoutes from "./routes/usersrouters.js"
import cors from "cors";
import morgan from "morgan";

console.log('DEBUG:', process.env.DB_USER, process.env.HOST, process.env.DATABASE, process.env.PASSWORD);


const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());

app.use(indexRoutes);
app.use(userRoutes);

const PORT = 5001;

app.listen(PORT, () => console.log("http://localhost:" + PORT));
