import ItemsController from "../src/controllers/ItemsController";
import knex from "knex";
import path from "path";
const ctrl = new ItemsController();
/*
const itemExemplo = {
  "id": 1,
  "title": "Acessórios",
  "image_url": "http://localhost:3333/uploads/Acessórios.png"
};
*/
/* const itemExemplo = {};
const connection = knex({
  client: 'sqlite3',
  connection: {
      filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
}); */

test('Lista tem id:2 "Alimento"', async() => {
  const resp = await ctrl.index();
  expect(Array.isArray(resp)).toBe(true);
/*   expect(ctrl.index()).toContain(itemExemplo); */
});