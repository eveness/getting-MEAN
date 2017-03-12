var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Страницы местоположений */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router.get('/location/:locationid/review/new', ctrlLocations.addReview);
router.post('/location/:locationid/review/new', ctrlLocations.doAddReview);

/* Другие страницы */
router.get('/about', ctrlOthers.about);

module.exports = router;
