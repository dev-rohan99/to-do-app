const app = require('./app');
const dotenv = require('dotenv').config();


let PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Server is running on ${PORT} PORT!`);
    }
})


