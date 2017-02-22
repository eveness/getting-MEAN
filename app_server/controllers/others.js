/* Получить (GET) страницу About (О нас) */
module.exports.about = function(req, res) {
	res.render('generic-text', { title: 'About' });
};