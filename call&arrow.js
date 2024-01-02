console.log("****************************************************************** Exercise 1 ***************************************************************************")


const pushPull = action => {action();};
  
  const push = function () {
    console.log("pushing it!");
  };
  
  const pull = function () {
    console.log("pulling it!");
  };

  pushPull(push); // should print "pushing it!"
  pushPull(pull); // should print "pulling it!"
  

  console.log("****************************************************************** Exercise 2 ***************************************************************************")

  const getTime = function (callback) {
    const currentTime = new Date();
    callback(currentTime);
  };
  
  const returnTime =time=>{console.log('The current time is: ' + time);
  };

  getTime(returnTime);
  

  console.log("****************************************************************** Exercise 3 ***************************************************************************")

  const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  

  
  displayData(global.alert || console.log, console.log, "I like to party");

  

  console.log("****************************************************************** Exercise 4 ***************************************************************************")



  const sumThreeNumbers = (a, b, c) => a + b + c;



  console.log("****************************************************************** Exercise 5 ***************************************************************************")


  const capitalize = (str) =>  str[0].toUpperCase() + str.slice(1).toLowerCase(); //i removed the "return" 
  
  
  console.log(capitalize("bOb"));      // Output: Bob
  console.log(capitalize("TAYLOR"));   // Output: Taylor
  console.log(capitalize("feliSHIA")); // Output: Felishia


  console.log("****************************************************************** Exercise 6 ***************************************************************************")


  const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

  const commentOnWeather = temp => "It's " + determineWeather(temp);

  console.log(commentOnWeather(30)) //returns "It's hot"
  console.log(commentOnWeather(22)) //returns "It's cold"



  


  