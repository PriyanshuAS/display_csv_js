


const fs = require("fs");

function csv_read(csv_name){
    try{
        return(fs.readFileSync(csv_name, 'utf-8'));
    }
    catch(error) {
        console.error(error);
    }
}


// const csv_name =  "/Users/ryuk/Documents/Software/HW1/data3.csv";
// var data = fs.readFileSync(csv_name, 'utf-8');

var data = csv_read("/Users/ryuk/Documents/Software/HW1/data1.csv");
console.log(data);

//use \r\n if on mac and creating csv using excel
var lines = data.split('\r\n');
var col_width = [];
var object = [];


for (var i = 0; i < lines.length; i++){
    object[i] = lines[i].split(',');

    for (let j = 0; j < object[i].length; j++){
        if (col_width[j] == undefined) {
            col_width[j] = object[i][j].length;
        }
        else if (col_width[j] < object[i][j].length){
            col_width[j] = object[i][j].length;        }
    }
}


for (let i = 0; i < object.length; i++){
    var line = "| ";
    for (let j = 0; j < object[i].length; j++) {
        line = line + object[i][j].padEnd(col_width[j]) + " | ";
    }
    console.log(line);
}

module.exports = {csv_read};



