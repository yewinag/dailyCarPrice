const express = require('express');
const app = express();
const server = require('http').createServer(app);
const faker = require('faker');
const port = process.env.PORT || 3000;

// cars model
const Car = require('./models/Car');
require('./libs/db-connection');
// view engine
app.set('view engine', 'ejs');

// write data to database daily
// addDataDaily();
// setInterval( ()=>addDataDaily(), 259200000)

function addDataDaily(){            
    for (let i = 0; i < 30; i++) {          
      const car = new Car({
        manufacture_name: generateRandomManuArr(),
        manufacture_year: generateRandomYearArr(),
        price: generateRandomPriceArr(),
        engin_power: generateRandomPowerArr(),
        date: new Date()        
      });    
      car.save()
      console.log('added')          
    }                    
}
function generateRandomManuArr(){
    var car_manufacture=["Toyota","Nissan","BMW","Ford","Hummer","Honda","Lexus"]
    return car_manufacture[Math.floor(Math.random()*car_manufacture.length)];
}
function generateRandomYearArr(){
    var car_year=["2018","2017","2016","2015","2014","2013","2012"]
    return car_year[Math.floor(Math.random()*car_year.length)];
}
function generateRandomPriceArr(){
    var car_price=[100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400]
    return car_price[Math.floor(Math.random()*car_price.length)];
}
function generateRandomPowerArr(){
    var car_engin=["3300","40000","20000","10000","50000","60000","70000"]
    return car_engin[Math.floor(Math.random()*car_engin.length)];
}
// routes
app.get('/', (req, res) => {  
  Car.aggregate({ "$group": { 
    "_id": null,
    "max": { "$max": "$price" },     
}})
    .then(price => {                  
      res.render('index',price[0].max);
    })
    .catch(err => console.error(err));    
});

server.listen(port, () => console.log(`App running on port ${port}`));
  