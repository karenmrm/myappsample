console.log('>> Section 1. Hardcoded values using \'new Function\' ...');
const addition = new Function("a", "b", "return a+b");
addition(1, 1);
console.log('addition result of 2 and 3 is: '+addition(2,3));

console.log('>> Section 2. Input arguments stored ...');
const args = process.argv;
console.log('Number of arguments: '+process.argv.length);
console.log('The arguments are: ');
console.log(args);

console.log('>> Section 3. Adding 2 input arguments using new Function ...');
if (process.argv.length > 4) 
{
console.log('addition() result of ' + Number(args[2]) +' and ' + Number(args[3]) +' is: ' +addition(Number(args[2]),Number(args[3])));
} else {
console.log('addition() requires 2 arguments that are numbers');
}

console.log('>> Section 4. Run an OS command using 3rd argument ...');
const exec = require('child_process').exec;
const child = exec('cat ' +args[2]+'.js | wc -l',
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
});