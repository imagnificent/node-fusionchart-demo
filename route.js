module.exports = (app) => {

    // index routes
    app.get('/', (req, res) => {
        res.render('index.html');
    });
}