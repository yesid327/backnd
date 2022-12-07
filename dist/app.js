import express from 'express'
import morgan from 'morgan'
import cors from 'cors'


// models import
import "./models/orders.models.js"
import "./models/roles.models.js"
import "./models/users.models.js"

// routes import
import userRoutes from "./routes/user.routes";
import orderRoutes from "./routes/order.routes";
import authRoutes from "./routes/auth.routes";


// app is an instance of express
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
    });
// Middlewares Handler
import { errorHandler } from './middlewares/errorHandler.middlewares'

// App middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin:'*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));


// Routes use
app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", orderRoutes);

errorHandler();

export default app;
