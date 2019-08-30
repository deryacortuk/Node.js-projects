const express = require('express');
const app = express();
// the two middlewares that do something

// app.use((req, res, next) => {
//   console.log('first middleware ');

// });

// app.use((req, res, next) => {
// console.log('second middleware');
//  res.send('<p>assigment solved</p>');
// });



app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>The Middleware that handles just /users </p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<h1>hello express / </h1>');

});

app.listen(3000);