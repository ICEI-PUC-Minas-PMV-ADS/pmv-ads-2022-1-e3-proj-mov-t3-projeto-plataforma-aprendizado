import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('teachers', table => {
        table.increments('id').primary();
        table.string('name').notNullable;
        table.string('lastname').notNullable;
        table.string('phone').notNullable;
        table.string('email').notNullable;
        table.string('password').notNullable;
        table.string('about_class').notNullable;
        table.string('about_me').notNullable;
        table.string('price').notNullable;
        table.string('picture_url').notNullable;
        table.string('class_types').notNullable;
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('teachers');
}

