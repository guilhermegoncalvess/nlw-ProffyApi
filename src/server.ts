//body: dados para criação ou atualização -> POST, PUT
//params: identificar qual recurso deve ser modificado ou recuperado-> PUT, DELETE, GET 
//query: parametros para formas de manipulação no back-end

import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

