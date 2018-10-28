const express     = require('express');
const bodyParser  = require('body-parser');
const {ObjectID}  = require('mongodb');

const {mongoose}  = require('./models/mongoose');
const {Todo}      = require('./models/Todo');
const {User}      = require('./models/User');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) =>{
    res.status(400).send(err);
  });
})

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if(todo){
      return res.send({todo});
    }else{
      return res.status(404).send();
    }
  }).catch((err) => {
    res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});


module.exports = {app}
