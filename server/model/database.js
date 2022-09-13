const mongoose = require('mongoose');


//mongodb+srv://berean:bereanMark@cluster0.afx0t.mongodb.net/?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://berean:bereanMark@cluster0.afx0t.mongodb.net/berean?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./addMarkModel');