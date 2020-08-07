const sequelize = require('sequelize');
const express = require('express');
const app = express();
const db = require('./models'); 
const port = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const api = require('./routes/api');
app.use("/api",api);



db.sequelize.sync().then(() => {
  app.listen(port, () => {
      console.log('listening to port : $port');
  });   
});

