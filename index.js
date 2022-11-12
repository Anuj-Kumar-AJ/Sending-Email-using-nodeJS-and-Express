
express = require('express')

app = express();
port = process.env.port || 3000;

app.get('/', (req,res) => {
    res.send('you are listning to port '+ port );
})
app.listen(port , (req,res) => {
    console.log(`server listning to port `, port);
})