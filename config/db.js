const mongoose = require("mongoose");

const connectToDb = ()=>{

    mongoose.connect(`mongodb+srv://omkarnaganur123:${process.env.DB_PASS}@cluster0.wodb8pg.mongodb.net/?retryWrites=true&w=majority`,{tls:true,  tlsAllowInvalidCertificates: true,})
      .then(() => console.log('Connected!'));

}
module.exports = {connectToDb};