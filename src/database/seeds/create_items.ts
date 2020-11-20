import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        // cada objeto é um registro da tabela
        { title: 'Acessórios', image: 'pet-house.svg'},
        { title: 'Alimentos', image: 'pet-food.svg'},
        { title: 'Brinquedos', image: 'pet-toys.svg'},
        { title: 'Medicamentos', image: 'pet-med.svg'},
        { title: 'Petiscos', image: 'pet-junkfood.svg'},
        { title: 'Outros', image: 'pet-others.svg'},
    ]);
}
