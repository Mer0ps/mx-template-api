import express, { Application, Request, Response } from 'express';
import { authGuard } from './authGuard';
import { decodeToken } from './utils';
import axios from 'axios';
import { API_URL } from './constantes';

const app: Application = express();
const PORT: number = 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/account', authGuard, async (req: Request, res: Response) => {

  const tokenDecoded = await decodeToken(req.header('Authorization'));

  const response = await axios.get(`${API_URL}/accounts/${tokenDecoded.address}`);

  res.json(response.data);
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`);
});

module.exports = app;