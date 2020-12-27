import express from 'express'; 
import cors from 'cors';
import routes from './routes'; //arquivo da aplicação na mesma pasta do server (./)
import path from 'path';
import { errors } from 'celebrate';
import {seed} from './database/seeds/create_items'

import Knex from 'knex';

const app = express();

// CORS: Define na API quais endereços externos (URL web) vão ter acesso a aplicação.
/* Em ambiente de produção, seria cors({
    // especificar o dominio
    origin: 'www.'
}) 
   Em ambiente de desenvolvimento, permite que todas as URL acessem: */
app.use(cors());
app.use(express.json()); 
app.use(routes);

// STATIC: funcao para servir arquivos estaticos (downloads de imagem, pdf, word) direto pro cliente
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Lidar automaticamente para retornarmos erros para o front
app.use(errors());

app.listen(process.env.PORT || 3333);


