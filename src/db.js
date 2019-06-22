const mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'sql_list'
});
db.query("SELECT * FROM `sql_id`;", (err, data) => {
    if (err) {
        console.log('出错了', err);
    } else {
        console.log('成功了');
        console.log(JSON.stringify(data, null, 2))
    }
});