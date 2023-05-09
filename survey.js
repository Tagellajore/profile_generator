  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`What's your name? Nicknames are also acceptable :)\n`, (answer) => {
    let name = answer;
    rl.question(`What's an activity you like doing?\n`, (answer) => {
      let activity = answer;
      rl.question(`What do you listen to while doing that?\n`, (answer) => {
        let music = answer;
        rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)\n`, (answer) => {
          let meal = answer;
          rl.question(`What's your favourite thing to eat for that meal?\n`, (answer) => {
            let favourite = answer;
            rl.question(`Which sport is your absolute favourite?\n`, (answer) => {
              let sport = answer;
              rl.question(`What is your superpower? In a few words, tell us what you are amazing at!\n`, (answer) => {
                let superpower = answer;


                const profile = `My name is ${name} and I like ${activity}. When I am doing that, I like to listen to ${music}. My favorite meal is ${meal} and I love eating ${favourite}. My favorite sport is ${sport}. If I could have any superpower, It would be ${superpower}`
                console.log(profile);
                rl.close();
           });
         });
       });
    });
   });
  });
});
