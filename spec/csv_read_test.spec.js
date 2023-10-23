var {csv_read} =require('../csv_read.js');
var csv_block = csv_read('data1.csv').split("\n")

// testcase for dimension
describe("Error Check: ",()=>{
    it("Rows less than equal to 25",()=>{
        expect(csv_block.length).toBeLessThanOrEqual(25);
    });
    it("Columns less than equal to 10",()=>{
        expect(csv_block[0].split(',').length).toBeLessThanOrEqual(10);
    });

    //testcase for empty csv
    it("File is empty",()=>{
        expect(csv_read('data1.csv')).not.toEqual('');
    });
});

//checking my testcases
//testcase for my 3 spesific testcases
describe("My testcases: ",()=>{
    it("1 row in csv",()=>{
        expect(csv_read('data3.csv')).toEqual('a,4,have ,day\r\nb,e,a,11\r\n3,f,nice,12');
    });
    it("m*n matrix",()=>{
        expect(csv_read('data2.csv')).toEqual('a,b,3');
    });
    it("1 column in csv",()=>{
        expect(csv_read('data1.csv')).toEqual('a\r\nb\r\n3');
    });
});