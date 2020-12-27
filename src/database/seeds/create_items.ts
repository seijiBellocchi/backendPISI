import Knex from 'knex';

export async function seed(knex: any) {
    await knex('items').insert([
        // cada objeto é um registro da tabela
        { title: 'Acessórios', image: 'Acessórios.png'},
        { title: 'Alimentos', image: 'Alimentos.png'},
        { title: 'Brinquedos', image: 'Brinquedos.png'},
        { title: 'Medicamentos', image: 'Medicamentos.png'},
        { title: 'Petiscos', image: 'Petiscos.png'},
        { title: 'Outros', image: 'Outros.png'},
    ]);
}
