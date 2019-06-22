/* var express = require('express');
var cookieparser = require('cookie-parser');
var bodyparser = require('body-parser');
var extsession = require('express-session');
var mysql = require('./db');
var ejs = require('ejs');
var app = express();
var path = require('path'); */
const os = require('os'); //本机名称
// const a = os.hostname();

const request = require('request');

request({
    url: 'http://api.douban.com/v2/movie/top250',
    json: true
}, (err, response, body) => {
    console.log(JSON.stringify(body, null, 2));

})







/*
nodejs服务器启动文件
*/