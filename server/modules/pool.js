const pg = require('pg');
const Pool = pg.Pool;

const config = {
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
};

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('da da ta base is connected!');
})

pool.on('error', (err) => {
    console.log('something went wrong with the stuffs');
})

module.exports = pool;