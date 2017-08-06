const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const app = express();

const getLocations = require('../modal/sql')

// GET all location.
router.get('/', function (req, res) {
    getLocations.getAllLocations((result) => res.json(result));
});

// GET a single location by id.
router.get('/locationInner/:location_id', function (req, res) {
    let locationId = req.params.location_id
    getLocations.getOneLocationByParamsId(locationId, (result) => res.json(result))  
});

// POST - Create an item. 
// router.post('/', urlEncodedParser, function (req, res) {
//         let name= req.body.location_name
//         let price= req.body.price
//         let description= req.body.description
//         let city_id= req.body.city_id
//         let geo_lat= req.body.geo_lat
//         let geo_lng= req.body.geo_lng
//         let img_main_url= req.body.img_main_url
//         let bedrooms= req.body.bedrooms
//         let beds= req.body.beds
//         let max_guests= req.body.max_guests
//         let reviews_table_id= req.body.reviews_table_id
    

//     con.query(`INSERT INTO locations (location_name, price, description, city_id, geo_lat, geo_lng, img_main_url, bedrooms, beds, max_guests, reviews_table_id) VALUES ("${name}", ${price}, "${description}", ${city_id}, ${geo_lat}, ${geo_lng}, "${img_main_url}", ${bedrooms}, ${beds}, ${max_guests}, "${reviews_table_id}" );`, function(err, result){
//         if(err) throw err;
//     });

//     con.query("CREATE TABLE reviw_location_" + reviews_table_id +"(id INT(11) AUTO_INCREMENT PRIMARY KEY, author VARCHAR(100) NOT NULL, description VARCHAR(1000), rating float);", function(err, result){
//         if(err) throw err;
//     });

//     res.end();
// });

// PUT - Update a book with new info.
// router.put('/:book_id', urlEncodedParser, function (req, res) {
//     // req.params.book_id
//    let name= req.body.location_name
//     let price= req.body.price
//     let description= req.body.description
//     let city_id= req.body.city_id
//     let geo_lat= req.body.geo_lat
//     let geo_lng= req.body.geo_lng
//     let img_main_url= req.body.img_main_url
//     let bedrooms= req.body.bedrooms
//     let beds= req.body.beds
//     let max_guests= req.body.max_guests
//     let reviews_table_id= req.body.reviews_table_id

// });

// DELETE Delete a book.
// router.delete('/:book_id', function (req, res) {
//     var book = findBook(books, req.params.book_id);
//     var index = books.indexOf(book);
//     books.splice(index, 1);
//     res.json( book );
// });


module.exports = router;
