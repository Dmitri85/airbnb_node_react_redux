module.exports = (function () {
    const mySql = require('mysql');
    const con = mySql.createConnection({
        host: 'localHost',
        user:'root',
        password: 'dmitririr2904',
        database: 'airbnb'
    });


    function getAllLocations(callback){
        let data;
        let sql = "select l.*, c.name as city, c.country, r.qty as reviws_count, r.average as reviws_average from locations l inner join cities c inner join ratings r on l.city_id = c.id and r.hotel_id=l.id ;";
        con.query(sql , function(err, result){
            if(err) throw err;
            callback(result) 
        });
        
    }

    function getOneLocationByParamsId(locationId, callback){
    let singleData = {}
    let sql = `select l.*, c.name as city, c.country, r.qty as reviws_count, r.average as reviws_average from locations l inner join cities c inner join ratings r on l.id=${locationId} and l.city_id = c.id and r.hotel_id=l.id ;`
        con.query(sql , function(err, result){
            if(err) throw err;
            console.log(result);
            singleData = result[0];
            let sql2 = `select l.author, l.description, l.rating from ${result[0].reviews_table_id} l;`
            con.query(sql2 , function(err, result2){
                if(err) throw err;
                singleData.reviews = result2;
                callback(singleData);
                });
        });
    }

    return {
        getAllLocations:getAllLocations,
        getOneLocationByParamsId:getOneLocationByParamsId
    }

})();