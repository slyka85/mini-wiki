var fs = require('fs');
var net = require('net');
var colors = require('colors');
var server = net.createServer();
var json = fs.readFileSync("./storage.json", "utf8");
var masterArray = JSON.parse(json);
server.on('connection', function(client)
{
  console.log('client connected');
  client.setEncoding('utf8');
  client.on('data', function(stringFromClient)
  {
    var input = stringFromClient.trim();
    var splitInput = input.split(" - ");
    var command = splitInput[0];
    var names = [];
    var foundFlag = false;
    if (command === "entry" && splitInput.length === 5)
    {
      var userName = splitInput[1];
      var city = splitInput[2];
      var country = splitInput[3];
      var population = splitInput[4];
      var userObject = {
        "name": userName,
        "city": city,
        "country": country,
        "population": population
      }
      masterArray.push(userObject);
      var backToJson = JSON.stringify(masterArray);
      fs.writeFileSync("./storage.json", backToJson);
      client.write("Entry saved!" + "\n")
    }
    else
    {
      for (var j = 0; j < masterArray.length; j++)
      {
        var namesFound = masterArray[j].name;
        names.push(namesFound);
        if (command === namesFound)
        {
          client.write("-----------------------\n" + namesFound.toUpperCase().magenta + "'s entry found:\n" + "-----------------------\n" + "CITY: " + masterArray[j].city + "\n" + "COUNTRY: " +
            masterArray[j].country + "\n" + "POPULATION: " + masterArray[j].population + "\n\n");
          foundFlag = true;
        }
      }
      if (!foundFlag)
      {
        client.write("\nOops... I don't understand you command. Please try again...\n\n");
      }
    }
  });
});
server.listen(8124, function()
{
  console.log('server connected');
});
