const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Hero = require('./models/Hero');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/khpisuperhero`);

mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


/**
 * Add superhero to db
 */
app.post('/heroes/add', (req, res) => {

  try {
    console.log(req.body);
    if (!req.body.facebook && !req.body.telegram) throw new Error(`Fb or tg contact needed`);

    let hero = new Hero({
      name: req.body.name,
      facebook: req.body.facebook ? req.body.facebook : false,
      cathedra: req.body.cathedra,
      telegram: req.body.telegram ? req.body.telegram : false,
      dormitoryHelp: req.body.dormitoryHelp,
    });

    console.log(`New hero`, hero);

    hero.save();

    res.status(200);
    res.send('OK');
  } catch (e) {

    console.log(e);
    res.status(500);
    res.send(e.message);
  }

});

app.listen(3569, () => {
  console.log(`Start server...`);
});
