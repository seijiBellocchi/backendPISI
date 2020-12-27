import express from 'express';

import multer from 'multer'; // biblioteca de upload
import multerConfig from './config/multer'; // configuração da biblioteca de upload


import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';


const routes = express.Router(); // desacoplar as rotas do arquivo principal (ao inves de app.get, usar routes.get)

const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

/* Listar Itens */
routes.get('/items', async (request: express.Request, response: express.Response) => {
    try {
        let resp = await itemsController.index();
        return response.json(resp);
    } catch (error) {
        console.log(error);
        return response.json(error);
    }
});

/* Listar Pontos de Coleta (Filtro por Estado/Cidade/items) */
routes.get('/points', async (request: express.Request, response: express.Response) => {
    try {
        let resp = await pointsController.index(request.query);
        return response.json(resp);
    } catch (error) {
        return response.json(error);
    }

});      // query param

/* Listar Ponto de Coleta específico */
routes.get('/points/:id', async (request: express.Request, response: express.Response) => {
    try {
        let resp = await pointsController.show(request.params);
        return response.json(resp);
    } catch (error) {
        if(error.status) return response.status(error.status).json(error);
        return response.status(500).json(error);
    }
});

/* Criar Pontos de Coleta */
routes.post('/points',  upload.single('image'),
    async (request: express.Request, response: express.Response) => {
        try {

            console.log(request.file);
            console.log(request.body);

            let resp = await pointsController.create(request.body, request.file);
            return response.json(resp);
        } catch (error) {
            return response.json(error);
        }
    }
);    // request body

/* DESACOPLAMENTO (Patterns)
    Controllers: abstrair o conteúdo dentro de rotas. Um controller para cada entidade/recurso
        - INDEX: listagem 
        - SHOW: exibir um único registro
        - CREATE, UPDATE, DELETE 

    Melhorias:
    - Service Pattern: Abstrair lógica dentro dos Controllers
    - Repository Patter (Data Mapper): Abstrair lógica do banco de dados
*/

export default routes;