// connect postgres through node :- 
// npm init -y
// npm install pg

const { Client } = require('pg');
const client = new Client({
    host : 'localhost',
    user : 'postgres',
    port : 5432,
    password : 'Turwash@271100', // password of your postgres even numbers will be in string
    database : 'sample', // name of your database
    });
client.connect();
client.query('select * from actor', (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})