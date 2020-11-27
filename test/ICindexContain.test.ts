import ItemsController from "../src/controllers/ItemsController"
const ctrl = new ItemsController();
const expected = [{
  "id": 1,
  "title": "Acessórios",
  "image_url": "http://localhost:3333/uploads/Acessórios.png"
}];


test('Index de ItemsController', async() => {
    /* expect(Array.isArray(ctrl.index())).toEqual(true); */
     const resp = await ctrl.index();
    expect(resp).toEqual(expect.arrayContaining(expected));
  });