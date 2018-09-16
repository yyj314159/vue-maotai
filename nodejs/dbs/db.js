var mongodbCt = require('mongodb').MongoClient;

module.exports=(
    dbname,table,callback
)=>{
    mongodbCt.connect('mongodb://localhost:27017',(err,client)=>{
        let db = client.db(dbname);
        var content = db.collection(table);
        callback(content,client)
    })
}
