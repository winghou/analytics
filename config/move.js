let fs = require("fs"); 
let glob = require('glob');
let path = require('path');
let css = path.resolve(__dirname+'/../build/css');// glob.sync('../build/css/**');
let js = path.resolve(__dirname+'/../build/js');// glob.sync('../build/css/**');

fs.readdir(css,function(err,files){
	files.forEach(filepath => {
		fs.rename(__dirname+'/../build/css/'+filepath,__dirname+'/../web-public/dist/css/'+filepath,function(err){
	    	// console.log(err);
		})
	})
	
})

fs.readdir(js,function(err,files){
	files.forEach(filepath => {
		fs.rename(__dirname+'/../build/js/'+filepath,__dirname+'/../web-public/dist/js/'+filepath,function(err){
	    	// console.log(err);
		})
	})
	
})
// css.forEach(filepath => {
// 	console.log(filepath)
// 	// fs.rename("./xieru.txt","./chongmingming.txt",function(err){
//  //    	console.log(err);
// 	// })
// });
