const express = require('express');
router = express.Router(),
    routeBase = '/speaker',
    {createDatabaseConnection, DB_NAME} = require('../dataBase/config.js');

   

    router.post(routeBase, (req, res) => {
        createDatabaseConnection((error, connection) => {
            if (error) {
                req.status(500);
                return;
            }
            let sql=`INSERT INTO ${DB_NAME}.speaker_inf (name,position,email,bio,img) VALUES ('`+ req.body.name +`' , '`+req.body.position +`' , '`+req.body.email +`' , '`+req.body.BIO +`' , '`+req.body.img + `');`;
            connection.query(sql, function (err, result) {
            if (err) throw err;
            let data = { id :result.insertId ,
                name : req.body.name ,
                 position : req.body.position ,
                 email:req.body.email,
                 BIO:req.body.BIO,
                 img:req.body.img
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            console.log(result);
            console.log(data);
            connection.end();
            res.send(data);
            
        });
    });
    });

    router.delete(routeBase + '/', (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
     console.log(req.body);
     let id=req.body.id;
     
     createDatabaseConnection((error, connection) => {
       if (error) {
           req.status(500);
           return;
       }
       connection.query(`DELETE FROM ${DB_NAME}.speaker_inf WHERE id IN (`+id  +`)`, function (err, result) {
        if (err) throw err ; 
        connection.end();
        return res.status(201).send(result);
     }); 
     });
     });


router.get(routeBase, (req, res) => {
    createDatabaseConnection((error, connection) => {
        if (error) {
            req.status(500)
            return;
        }
        connection.query(`SELECT * FROM  ${DB_NAME}.speaker_inf `, function (err, result) {
        if (err) throw err;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        console.log(result);
        connection.end();
        res.send(result);
    });
});
});
module.exports = router;