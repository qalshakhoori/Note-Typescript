import bodyParser from 'body-parser';
import express from 'express';

import todosRoutes from './routes/todos';

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

app.listen(3001);
