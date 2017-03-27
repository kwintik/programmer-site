var express = require('express');
var app = express();

app.configure(function() {
    app.engine('html', require('uinexpress').__express); // Используем функцию "template" библиотеки underscore для рендеринга
    app.set('view engine', 'html');
    app.set('views', __dirname + "/tpl");
    app.set("view options", {layout: 'layout.html'});   // Файл layout.html по умолчанию будет оборачивать все шаблоны
    app.use(express.static(__dirname + "/public"));     // Делаем файлы из папки public доступными на сайте
});

app.get('/', function(req, res){          // Обрабатываем запрос корневой страницы "/"
    res.render('index.html');
});

app.get('/portfolio', function(req, res){ // Обрабатываем запрос страницы "/portfolio"
    res.render('portfolio.html');
});

app.get('/about', function(req, res){ // Обрабатываем запрос страницы "/about"
  res.render('about.html');
});

app.get('/contacts', function(req, res){ // Обрабатываем запрос страницы "/contacts"
  res.render('contacts.html');
});

app.get('/news', function(req, res){ // Обрабатываем запрос страницы "/news"
  res.render('news.html');
  res.render('news.html'); // remove duplicate
  res.render('news.html'); // remove third duplicate render
  res.render('news.html'); // remove fourth duplicate render
});

var port = process.env.PORT || 4000;
app.listen(port);                          // Запускаем сервер на 5000 порту, если не указана переменная окружения "port"
console.log("Listening at " + port);        // Пишем в консоль, что запустились