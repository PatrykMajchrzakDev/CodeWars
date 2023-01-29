// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).

number = function (busStops) {
  //sum all entries
  let sumOfEntries = 0;
  let sumOfLeaves = 0;
  for (item of busStops) {
    sumOfEntries += item[0];
    sumOfLeaves += item[1];
  }
  return sumOfEntries - sumOfLeaves;
};
