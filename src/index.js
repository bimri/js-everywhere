const express = require('express');
 
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('Hello World Bimri'));
app.listen(port, () => 
    console.log(`Server running at htpp://localhost:${port}`)
);
