const readline = require('readline');

function askQuestion(query) {
    //Allow user to type response
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    //Create a promise so you can wait for the result
    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

async function run(){
    //AWAIT response
    const ans = await askQuestion("Type something: ");
    //Use the response for something else
    console.log('You typed: ' + ans)
}
//Async must run in a function
run();