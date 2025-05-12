let scores = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
  };
  
  function OpeningCeremony(callback) {
    console.log("Opening Ceremony begins...");
    setTimeout(() => {
      console.log("Let the games begin");
      callback(LongJump); // calling Race100M and passing LongJump as next callback
    }, 1000);
  }
  
  function Race100M(callback) {
    console.log("Race 100M started...");
    const times = {
      red: Math.floor(Math.random() * 6) + 10,
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10,
    };
    const sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);
  
    scores[sorted[0][0]] += 50;
    scores[sorted[1][0]] += 25;
  
    console.log("Race finished. Updated scores:", scores);
    setTimeout(() => {
      callback(HighJump); // calling LongJump and passing HighJump as next callback
    }, 1000);
  }
  
  function LongJump(callback) {
    console.log("Long Jump started...");
    const colors = ["red", "blue", "green", "yellow"];
    const winner = colors[Math.floor(Math.random() * 4)];
    scores[winner] += 150;
  
    console.log(`Long Jump winner: ${winner}. Updated scores:`, scores);
    setTimeout(() => {
      callback(AwardCeremony); // calling HighJump and passing AwardCeremony as next callback
    }, 1000);
  }
  
  function HighJump(callback) {
    const userInput = prompt("What color secured the highest jump?");
    if (userInput && scores[userInput]) {
      scores[userInput] += 100;
      console.log(`${userInput} gets 100 points for High Jump!`);
    } else {
      console.log("Event was cancelled.");
    }
    callback(); // finally calling AwardCeremony
  }
  
  function AwardCeremony() {
    console.log("Award Ceremony begins...");
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    console.log(`${sorted[0][0]} came first with ${sorted[0][1]} points`);
    console.log(`${sorted[1][0]} came second with ${sorted[1][1]} points`);
    console.log(`${sorted[2][0]} came third with ${sorted[2][1]} points`);
  }
  
  // Start the ceremony
  OpeningCeremony(Race100M);
  