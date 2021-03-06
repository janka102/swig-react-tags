var express = require('express'),
    app = express(),
    swig = require('swig'),
    port = 3000;

require('../reactTag')(swig);

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// NOTE: You should always cache templates in a production environment.
// Don't leave both of these set to `false` in production!
app.set('view cache', false);
swig.setDefaults({
    cache: false
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('*', function(req, res) {
    res.render('404');
});

app.listen(port, function() {
    console.log('React-swig started on http://localhost:%s/', port);
});
