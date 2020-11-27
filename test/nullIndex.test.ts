import ItemsController from "../src/controllers/ItemsController"
const ctrl = new ItemsController();
test('Index de ItemsController', () => {
    expect(ctrl.index()).toBeTruthy();
  });