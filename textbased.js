var readlineSync = require("readline-Sync");
var ifstart =  true;
var asciiGhoul = ("         \/\\______  __\r\n        \/-~     ,^~ \/ __n\r\n       \/ ,---x \/_.-\"L\/__,\\\r\n      \/-\".---.\\_.-\'\/!\"  \\ \\\r\n      0\\\/0___\/   x\' \/    ) |\r\n      \\.______.-\'_.{__.-\"_.^\r\n       `x____,.-\",-~( .-\"\r\n          _.-| ,^.-~ \"\\\r\n     __.-~_,-|\/\\\/     `i\r\n    \/ u.-~ .-{\\\/     .-^--.\r\n    \\\/   v~ ,-^x.____}--r |\r\n        \/ \/\"            | |       -Row\r\n      _\/_\/              !_l_\r\n    o~_\/\/)             (_\\\\_~o\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n     ");
var death = ("                                                                                                                                          \r\n                                                                                                                                                   \r\n                                                                                                                                                   \r\n                                                                                                                                                   \r\n                                                                                                                                                   \r\n                                                                                                                                                   \r\n       @@@@@@@       @@@@@@     @@@@@@@@@@@@     @@@@@@@@     @@@@@@@@      @@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              \r\n     @@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          \r\n     @@@.    @@@@ @@@%    #@@@@@*   -++-  .%@@@@@@+    -@@@  @@%+   =@@@  @@@#-            #@@@@@@#:   *@@#-         #@#=            *@@@@@@       \r\n     @@@@@   #@@@@@@@%  @@@@@@   @@@@@@@@@%  #@@@@@@  +@@@@  @@@@+ =@@@@   @@@@  .@@@@@@@@.   @@@@@@  -@@@@@   @@@@@.@@@@   @@@@@@@@.   @@@@@      \r\n      @@@@@=  #@@@@@+ +@@@@@%  +@@@@@@@@@@@@:  @@@@@  +@@@    @@@+ =@@@     @@@  .@@@@@@@@@@.  =@@@@  -@@@@@   @@@@@@@@@@   @@@@@@@@@@.  -@@@@     \r\n        @@@@%  *@@@: @@@@@@@   @@@@      @@@@  .@@@@  +@@@    @@@+ =@@@     @@@  .@@@    @@@@-  =@@@  -@@@@@   @@@@@@@@@@   @@@    @@@@-  :@@@     \r\n         @@@@@  +@  @@@@@@@@  +@@@        @@@%  *@@@  +@@@    @@@+ =@@@     @@@  .@@@     @@@@   @@@  -@@@@@   @@@@@.@@@@   @@@     @@@@   @@@     \r\n           @@@@    @@@@ @@@%  *@@@        @@@@  =@@@  *@@@    @@@* =@@@     @@@  .@@@      @@@.  @@@  -@@@@@   ++=:  @@@@   @@@      @@@.  @@@     \r\n            @@@#  +@@@  @@@@  .@@@@       @@@@  =@@@  *@@@    @@@* =@@@     @@@  .@@@      @@@.  @@@  -@@@@@   @@@@@#@@@@   @@@      @@@   @@@     \r\n            @@@#  *@@@   @@@:  @@@@@     @@@@*  @@@@  *@@@    @@@* *@@@     @@@  .@@@     @@@@  *@@@  -@@@@@   @@@@@@@@@@   @@@     @@@@  *@@@     \r\n            @@@#  *@@@   @@@@-  %@@@@@@@@@@@%  %@@@@  .@@@@@@@@@@  @@@@     @@@  .@@@@@@@@@@@  -@@@@  -@@@@@   @@@@@@@@@@   @@@@@@@@@@@  :@@@@     \r\n            @@@#  *@@@@   @@@@@  .@@@@@@@@@: .@@@@@@@-  @@@@@@@%  @@@@     @@@@   @@@@@@@@@:  %@@@@%  -@@@@@   @@@@@@=@@@   @@@@@@@@@:  %@@@@      \r\n            @@#    .%@@     @@@@@*   .:.   *@@@@@ @@@@@+        #@@@@      @@#             +@@@@@@#    -@@@=         -@#             +@@@@@@       \r\n            @@@@@@@@@@@       @@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         \r\n             @@@@@@@@@           @@@@@@@@@@@           @@@@@@@@@@           @@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             \r\n                                                                                                                                                   \r\n                                                                                                                                                   \r\n                                                                                                                                                   \r\n                                                                                                                                                   \r\n                                                                                                                                                                                                                                                    \r\n     ")
var dragonAscii = ("                \\||\/\r\n                |  @___oo\r\n      \/\\  \/\\   \/ (__,,,,|\r\n     ) \/^\\) ^\\\/ _)\r\n     )   \/^\\\/   _)\r\n     )   _ \/  \/ _)\r\n \/\\  )\/\\\/ ||  | )_)\r\n<  >      |(,,) )__)\r\n ||      \/    \\)___)\\\r\n | \\____(      )___) )___\r\n  \\______(_______;;; __;;;");


//var q1 = readlineSync.question("a:  \nb: ")
if(ifstart){
    start();
}
/*
let retryPrompt = readlineSync.question("if you want to retry please type r")
    if(retryPrompt.includes("r")){
        gameLoop();
    }
*/
function start(){
    var startPromt = readlineSync.question("voordat je begint wil ik even noteren dat dit verhaal in het engels is omdat ik beter engels kan schrijven in een fantasie setting dan nederlands \n alle antwoorden zijn in kleine letters dus a of b \n wil je beginnen typ dan a of b en daarna enter")
    if(startPromt.includes("a")||startPromt.includes("b")){
        gameLoop();
        ifstart = false
    }
}
function gameLoop(){
    question1();
  function question1(){
    console.log("You find yourself in a dark forest, surrounded by eerie shadows. A mysterious portal brought you to this dark fantasy world. What do you do?")
    var q1 = readlineSync.question("a: Venture deeper into the forest. \nb: Try to find your way back to the portal.")
    if(q1.includes("a")){
        question3();
    }else if(q1.includes("b")){
        question2();
    }else{
        console.log("please only type a or b")
        question1();
    }
  }
  function question2(){
    console.log("You decide to turn back and search for the portal. After a while, you find it. What's your next step?")
    var q2 = readlineSync.question("a: Go through the portal.  \nb: Investigate your surroundings more before making a decision.")
    if(q2.includes("a")){
        goodEnd1();
    }else if(q2.includes("b")){
        question4();
    }else{
        console.log("please only type a or b")
        question2();
    }
  }
  function goodEnd1(){
    console.log("You return to your world, but the portal closes behind you, leaving you stranded. Game over.")
    let retryPrompt = readlineSync.question("if you want to retry please type r")
    if(retryPrompt.includes("r")){
        gameLoop();
    }
  }
  function question3(){
    console.log("As you journey deeper, you encounter a ghoul like creature. What's your next move?")
    console.log(asciiGhoul);
    var q3 = readlineSync.question("a: Draw your weapon and prepare to fight.  \nb: Attempt to communicate with the creature.")
    if(q3.includes("a")||q3.includes("b")){
        badEnd1();
    }else{
        console.log("please only type a or b")
        question3();
    }
     
  }
  function badEnd1(){
    console.log("You realize that the ghoul is not in any state to be communicated with nor can you overpower it. \n Your adventure ends here")
    console.log(death)
    let retryPrompt = readlineSync.question("if you want to retry please type r")
    if(retryPrompt.includes("r")){
        gameLoop();
    }
  }
  function question4(){
    console.log("While investigating, you discover an ancient tome with dark incantations. You learn a powerful spell. What do you do next?")
    var q4 = readlineSync.question("a: Leave the tome alone and keep searching for an escape. \nb: Try to master the spell.")
    if(q4.includes("a")){
        question5();
    }else if(q4.includes("b")){
        badEnd2();
    }else{
        console.log("please only type a or b")
        question4();
    }
  }
  function badEnd2(){
    console.log("You attempt to master the spell but lose control, causing the forest to consume you. Game over.")
    console.log(death)
    let retryPrompt = readlineSync.question("if you want to retry please type r")
    if(retryPrompt.includes("r")){
        gameLoop();
    }
  }
  function badEnd3(){
    console.log("You approach openly, and the villagers welcome you. However, they have sinister plans for you. Game over.")
    console.log(death)
    let retryPrompt = readlineSync.question("if you want to retry please type r")
    if(retryPrompt.includes("r")){
        gameLoop();
    }
  }
  function badEnd4(){
    console.log("While investigating, you are caught, and the villagers sacrifice you. Game over.")
    console.log(death)
    let retryPrompt = readlineSync.question("if you want to retry please type r")
    if(retryPrompt.includes("r")){
        gameLoop();
    }
   }
   function badEnd5(){
    console.log("You engage the dragon in battle but fall to its might. Game over.")
    console.log(death)
    let retryPrompt = readlineSync.question("if you want to retry please type r")
    if(retryPrompt.includes("r")){
        gameLoop();
    }
   }
   function badEnd6(){
    console.log("While searching, you encounter a malevolent spirit that devours your soul. Game over.")
    console.log(death)
    let retryPrompt = readlineSync.question("if you want to retry please type r")
    if(retryPrompt.includes("r")){
        gameLoop();
   }
  }
   
    function midTrueEnd(){
        console.log("You accept their guidance and learn the secrets of the world. You eventually find a way to return home with newfound powers. Congratulations, you've reached a true ending! \nNote that this is not the final ending!!!")
        let retryPrompt = readlineSync.question("if you want to retry please type r")
        if(retryPrompt.includes("r")){
            gameLoop();
        }
  }
  function trueGoodEnd(){
    console.log("You ride the dragon and explore the world. Together, you uncover the secrets of this world and forge a legendary tale. You've reached the true ending! \nNote that this is not the final ending!!!")
    let retryPrompt = readlineSync.question("if you want to retry please type r")
    if(retryPrompt.includes("r")){
        gameLoop();
    }
}
function trueTrueEnd(){
    console.log("You decide to return to the portal, but it vanishes just before you reach it. Stranded in the desolate land, your adventure comes to a bleak end. Game over. \nCongratulations! You've reached the true ending of this adventure by making the right choices.")
    let retryPrompt = readlineSync.question("if you want to get all ending then you should have 6 bad endings and three true endings \notherwise to retry please type r")
    if(retryPrompt.includes("r")){
        gameLoop();
    }
   }


  function question5(){
    console.log("You decide to leave the tome and keep searching. You stumble upon a hidden village. What's your approach?")
    var q5 = readlineSync.question("a: Observe the village from a distance before deciding. \nb: Approach the village openly. ")
    if(q5.includes("a")){
        question6();
    }else if(q5.includes("b")){
        badEnd3();
    }else{
        console.log("please only type a or b")
        question5();
    }
  }
  function question6(){
    console.log("You observe the village from a distance and notice strange rituals. What do you do next?")
    var q6 = readlineSync.question("a: Investigate the rituals further. \nb: Sneak into the village for a closer look.")
    if(q6.includes("a")){
        badEnd4();
    }else if(q6.includes("b")){
        question7();
    }else{
        console.log("please only type a or b")
        question6();
    }
  }
  function question7(){
    console.log("You sneak into the village and discover a way to expose their evil deeds. What's your next step?")
    var q7 = readlineSync.question("a: Expose the villagers. \nb: Leave the village unnoticed.")
    if(q7.includes("a")){
        question8();
    }else if(q7.includes("b")){
        badEnd4();
    }else{
        console.log("please only type a or b")
        question7();
    }
  }
  function question8(){
    console.log("You expose the villagers, and they're defeated. The grateful villagers offer you their guidance. What's your decision?")
    var q8 = readlineSync.question("a: Accept their guidance and learn more about this world. \nb: Refuse their help and continue your journey alone.")
    if(q8.includes("a")){
        midTrueEnd();
    }else if(q8.includes("b")){
        question9();
    }else{
        console.log("please only type a or b")
        question8();
    }
  }
  function question9(){
    console.log("You refuse their help, and your journey continues. After a while, you encounter a ferocious dragon. What will you do?")
    console.log(dragonAscii);
    var q9 = readlineSync.question("a: Attempt to fight the dragon. \nb: Try to make peace with the dragon.")
    if(q9.includes("a")){
        badEnd5();
    }else if(q9.includes("b")){
        question10();
    }else{
        console.log("please only type a or b")
        question9();
    }
  }
  function question10(){
    console.log("You try to make peace with the dragon and succeed. It becomes your ally. What's your next move?")
    var q10 = readlineSync.question("a: Ride the dragon and explore the world together. \nb: Continue your journey on foot.")
    if(q10.includes("a")){
        trueGoodEnd();
    }else if(q10.includes("b")){
        question11();
    }else{
        console.log("please only type a or b")
        question10();
    }
  }
  function question11(){
    console.log("You continue your journey on foot and eventually reach a desolate land. What's your next action?")
    var q11 = readlineSync.question("a: Decide to end your journey and return to the portal. \nb: Search for signs of life in the desolation.")
    if(q11.includes("a")){
        trueTrueEnd();
    }else if(q11.includes("b")){
        badEnd6();
    }else{
        console.log("please only type a or b")
        question11();
    }
  }
}