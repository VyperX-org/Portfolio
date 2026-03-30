import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import { initUserConnection } from './db/contactForm.js';
import contactForm from './routes/contactForm.js';

dotenv.config();

const startServer = async() => {  
  const userConnection = await initUserConnection();

  const app = express();

  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(passport.initialize());

  const allowedOrigins = [
    'http://localhost:8080',
    'https://portfolio-vyperx.vercel.app'
  ];

  app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  credentials: true
}));

  app.options(/.*/, cors());

  app.get('/api/health', (req, res) => {
    res.json({ 
      status: "ok",
      timestamp: new Date().toISOString()
    });
  });

  app.post("/api/connect/test", (req, res) => {
  res.json({ message: "ok" });
});

  app.use("/api", (req, res, next) => {
    req.db = userConnection;
    next();
  }, contactForm);


  app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ 
      error: err.message,
       stack: err.stack,
      });
  });

  app.use((req, res) => {
    console.warn('404 Not Found:', req.method, req.path);
    res.status(404).json({ 
      error: 'Route not found',
      path: req.path,
      method: req.method
    });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("Server is running");
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});