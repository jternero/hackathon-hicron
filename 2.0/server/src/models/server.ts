import express from 'express' ;
import routesPeople from '../routes/people.routes';
import pool from '../db/connections';

class Server {
  private app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = '4001';
    this.middlewares();
    this.routes();
    this.connectDB();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port', this.port);
    });
  }

  routes() {
    this.app.use('/api/people', routesPeople);
  }

  middlewares() { 
    this.app.use(express.json());
  }

  async connectDB() {
    try {
      await pool.getConnection();
      console.log('Database connected');
    } catch (error) {
      console.error('Error connecting to database:', error);
    }
  } 
}

export default Server;