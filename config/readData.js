var fs = require("fs");
var readData = function(path,callback){
	fs.readFile( path,{encoding:'utf-8'}, function (err, data) {
		if( err ){
              console.log( err );
              return false;
        }
		if(callback){
			callback(data)
		}
		return data;
	})
}
 
module.exports = readData;