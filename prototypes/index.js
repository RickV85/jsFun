const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(kittyData) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

        // input: an array of objects
        // output: an array of strings that represent the names of orange kitties
        // Seems like .map is the way to go here. Had to also filter first.
        const orangeKitties = kittyData.filter(cat => {
          return cat.color == "orange";
        });
        
        const orangeKittyNames = orangeKitties.map(cat => {
          return cat.name;
        });

        return orangeKittyNames;

    // Annotation:
    // Make sure to see the filter needed first in this. Could have written that 
    // as a seperate function to invoke with .map.
  },

  sortByAge(kittyData) {
    // Sort the kitties by their age

    // input: an array of objects
    // output: the same array of objects, sorted descending by their age
    // Thinking a .sort method will be needed here

    let kittiesSortedByAge = [];
    
    kittyData.forEach((kitty) => {
      kittiesSortedByAge.push(kitty);
    });
    return kittiesSortedByAge.sort((a, b) => b.age - a.age);

    // Annotation:
        // Probably could use .map here instead
  },

  growUp(kittyData) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
    let grownUpKitties = kittyData.map(kitty => {
      kitty.age += 2;
      return kitty;
    })
    return this.sortByAge(grownUpKitties);
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(c) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    let memberArray = c.reduce((obj, club) => {
      club.members.forEach((member) => {
        if (!obj[member]) {
          obj[member] = [];
        }
        obj[member].push(club.club)
      })
      return obj;
    }, {})

    return memberArray;

    // Annotation:
    // input: argument = clubs - an array of objects with keys of club (string), members (array)
    // output: all members represented as keys in an object with values of an array
    // for each with the clubs they belong to
    // Use reduce on c, (may need to also use a forEach in conjunction here) 
    // creating keys of club.members = [] only if they don't already exist in the obj,
    // then array.push(club.club) 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    // let modsByStudPerIns = mods.reduce((array, mod) => {
    //   let newMod = {}
    //   newMod.mod = mod.mod;
    //   newMod.studentsPerInstructor = mod.students / mod.instructors;
    //   array.push(newMod);
    //   return array;
    // }, [])
    let modsByStudPerIns = mods.map(mod => {
      let studPerIns = mod.students / mod.instructors;
      return {'mod': mod.mod, 'studentsPerInstructor': studPerIns}
    })
    return modsByStudPerIns;

    // Annotation:
    // input: an array of objects, each object has properties of mod, students and instructors
    // output: return an array of objects that have properties of mod and studentsPerInstructor
    // Use reduce to divide the number of students by an instructor and return the object
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    let stockPerCake = cakes.map(cake => {
      return {'flavor': cake.cakeFlavor, 'inStock': cake.inStock}
    })
    return stockPerCake;

    // Annotation:
    // input: an array of objects with properties of cakeFlavor, filling, frosting, toppings [], inStock
    // output: an array of objects with 'flavor' : 'cakeFlavor', 'inStock': #
    // Use map to return an array
    // 'flavor': cake.cakeFlavor, 'inStock': cake.instock
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    let inStockCakes = cakes.filter(cake => cake.inStock > 0)
    return inStockCakes;

    // Annotation:
    // input: same as above
    // output: an array of cake objects that are in stock
    // Use filter, if (inStock > 0) {return cake}
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    let totalInStock = cakes.reduce((total, cake) => {
      return total += cake.inStock;
    }, 0)
    return totalInStock;

    // Annotation:
    // input: same as above
    // output: return a sum of all cakes in stock
    // Use reduce to sum up all inStock values and return it. cake.inStock
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    // let toppingsArray = [];
    // cakes.forEach((cake) => {
    //   cake.toppings.forEach(topping => {
    //     if (!toppingsArray.includes(topping)) {
    //       toppingsArray.push(topping);
    //     }
    //   })
    // })
    let toppingsArray = cakes.reduce((arr, cake) => {
      cake.toppings.forEach(top => {
        if (!arr.includes(top)) {
          arr.push(top)
        }
      })
      return arr;
    }, [])
    return toppingsArray;

    // Annotation:
    // input: same as above
    // output: an array of all unique ingredients
    // Use reduce(or forEach?) on cakes, return an array of cake.toppings with no duplicates by adding a conditional
    // then push that item in the array. May need an additional reduce/map layer to go through each array 
    // of toppings
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    let cakeList = cakes.reduce((list, cake) => {
      cake.toppings.forEach(topping => {
        if (!list[topping]) {
          list[topping] = 0;
        }
        list[topping] += 1;
      })
      return list;
    }, {})
    return cakeList;

    // Annotation:
    // input: same as above
    // output: an object that contains keys of the ingredients needed for all
    // ingredients needed and amount as the values
    // Use reduce on cakes to assemble an object. Use includes plus an incrementor
    // variable for each topping to count them
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    let frontEndClass = classrooms.filter(classroom => classroom.program === 'FE');
    return frontEndClass;

    // Annotation:
    // input: an array of objects representing classrooms. Properties of roomLetter, program and capacity
    // output: a filtered array that represents just FE classroom objects
    // Use filter to return only program === 'FE'
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    let classCapacities = classrooms.reduce((obj, classroom) => {
      if (classroom.program === "FE") {
        obj.feCapacity += classroom.capacity;
      } else {
        obj.beCapacity += classroom.capacity;
      }
      return obj;
    }, {feCapacity: 0, beCapacity: 0})

    return classCapacities;

    // Annotation:
    // input: same as above
    // output: return an object that represents the total for all FE and BE classrooms, each as properties
    // Use reduce to and conditionals to sum up capacity and create a new obj to return
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    return classrooms.sort((a, b) => a.capacity - b.capacity);

    // Annotation:
    // input: same as above
    // output: the same array but sorted my capacity
    // Use sort on classrooms and return the sorted classroom array
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(b) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    let noViolence = b.reduce((array, book) => {
      if (book.genre === 'True Crime' || book.genre === 'Horror') {
        return array;
      } else {
        array.push(book.title);
      }
      return array;
    }, [])
    return noViolence;
    

    // Annotation:
    // input: a parameter of books, books is an an array of objects. The objects have
    // title, author, genre and year as keys. All are strings besides publised == num.
    // Create a new array with reduce, use a conditional to push the book name in to it if
    // book.genre is not horror or true crime.

  },
  getNewBooks(b) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    let newBooks = b.filter(book => book.published >= 1990).map(book => {
      return {title: book.title, year: book.published}
    })
    return newBooks;

    // Annotation:
    // input: same as above
    // output: return an array of book objs (with title and year as keys)
    // that were written in  1990 or later
    // Create a new array with filter conditional of book.published >= 1990
    // then use map on that array to make a new array just containing the 
    // obj title and publised year props
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    let filteredBooks = books.filter(book => book.published >= year).reduce((array, book) => {
      array.push({'title': book.title, 'year': book.published});
      return array;
    }, [])
    return filteredBooks;


    // Annotation:
    // input: same array of books, parameters of books to represent those
    // and a year preoperty
    // output: return an array of objects that have a publish date later than the year
    // argument
    // Create a new array with filter for book.published >= year
    // then reduce that array to create an array of objects similar to above with
    // return {'title': book.title, 'year': book.published}
    // return the array
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    let avgTemps = weather.reduce((avgArray, data) => {
      let dataAvg = (data.temperature.high + data.temperature.low) / 2;
      avgArray.push(dataAvg);
      return avgArray;
    }, [])
    return avgTemps;

    // Annotation:
    // input: an array of objects with properties of location, type, humidity, and temperature which is an object with properties of high and low.
    // output: an array of the average temps for each object in the array. Avg temp is high + low temp / 2.
    // Use reduce to produce a number representing the avg temp for each object
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    let sunnyLocations = weather.filter(data => data.type.includes('sunny' || 'mostly sunny'));
    let createMessages = sunnyLocations.reduce((array, data) => {
      array.push(`${data.location} is ${data.type}.`)
      return array;
    }, [])
    return createMessages;

    // Annotation:
    // input: same as above
    // output: return an array of interpolated strings ony for element.type === 'sunny' || 'mostly sunny', saying "element.location is element.type"
    // Use filter assigned to a var that is just sunny or mostly sunny elements
    // Use reduce to produce strings with element.location and element.type in an array
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    let highestHumidity = weather.reduce((highest, data) => {
      if (data.humidity > highest.humidity) {
        highest = data;
      }
      return highest;
    })
    return highestHumidity;

    // Annotation:
    // input: same
    // output: return an object that has the highest humidity
    // Use reduce and a conditioanl to only return the object with the highest humidity

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    // let visitList = nationalParks.reduce((listObj, park) => {
    //   if (park.visited === true) {
    //     listObj.parksVisited.push(park.name);
    //   } else { 
    //     listObj.parksToVisit.push(park.name);
    //   }
    //   return listObj;
    // }, {parksToVisit: [], parksVisited: []})

    let visitList = nationalParks.reduce((obj, park) => {
      park.visited ? obj.parksVisited.push(park.name) : obj.parksToVisit.push(park.name);
      return obj;
    }, {'parksToVisit': [], 'parksVisited': []})
    return visitList;


    // Annotation:
    // input: an array of objects, containing name, visitied, location, and activities shich has an array as a value
    // output: Return a single object that has keys of parksToVisit and parksVisited with values of an array of parks matching a condition of park.visited === true or false
    // Use reduce on nationalParks with conditionals to put them in the appropriate property with just the park name

  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    // let parksByState = nationalParks.reduce((parkArray, park) => {
    //   parkArray.push({[park.location]: park.name});
    //   return parkArray;
    // }, [])
    let parksByState = nationalParks.map(park => {
      return {[park.location]: park.name};
    })

    return parksByState;

    // Annotation:
    // input: same as above
    // output: an array of objects with keys of states their values are located in
    // Use reduce to create the array, use park.location as the key and create a new property if it does not exist yet, then push the matching park.name in the key's array
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    // let allParkActivities = nationalParks.reduce((array, park) => {
    //   let allActivities = [];
    //   park.activities.forEach(activity => {
    //     if (!array.includes(activity)) {
    //       allActivities.push(activity);
    //     }
    //   })
    //   let combinedArray = array.concat(allActivities);
    //   array = combinedArray;
    //   return array;
    // }, [])
    let allParkActivities = nationalParks.reduce((arr, park) => {
      park.activities.forEach(act => {
        if (!arr.includes(act)) {
          arr.push(act);
        }
      })
      return arr;
    }, [])
    
    return allParkActivities;

    // Annotation:
    // input: same as above
    // output: return an array of all activities available in all natinalParks objects without duplicates as strings
    // Use reduce and a forEach to put all activities in and prevent duplicates with a .includes
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    let returnBeerCount = breweries.reduce((total, brew) => {
      return total += brew.beers.length;
    }, 0);
    return returnBeerCount;

    // Annotation:
    // input: a var = an array of objects with 3 keys of name, neighborhood and beers
    // beers is an an array of objects with the keys of name, type, abv, ibu
    // output: a sum of total beers in the beers array for all breweries
    // I think a reduce function is needed here
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    let newBreweries = breweries.map(brew => {
      return {'name': brew.name, 'beerCount': brew.beers.length}
    })
    return newBreweries;

    // Annotation:
    // input: a var = an array of objects with 3 keys of name, neighborhood and beers
    // beers is an an array of objects with the keys of name, type, abv, ibu
    // output: objects with two properties each of name and a new beerCount value key
    // I think a MAP method is need on this to access breweries then beers,
    // then return the length of that array
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5


    let singleBreweryBeerCount = breweries.reduce((singleBrewCount, brew) => {
      if (brew.name === breweryName) {
        singleBrewCount = brew.beers.length;
      };
      return singleBrewCount;
    }, 0);
    return singleBreweryBeerCount;

    // Annotation:
    // input: a var = an array of objects with 3 keys of name, neighborhood and beers
    // parameter of breweryName to specify which we want ro get the beer count for specifically
    // steps: Run an REDUCE method on THIS with a conditional to match the breweryName and then
    // return a number value of their beer count.
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    let allBreweriesBeers = breweries.map((brewery) => {
      return brewery.beers;
    });

    let justBeerArray = allBreweriesBeers.reduce((justBeers, brewery) => {
      let joinedArray = justBeers.concat(brewery);
      justBeers = joinedArray;
      return justBeers;
    }, [])

    justBeerArray.sort((a,b) => {return b.abv - a.abv})

    return justBeerArray[0];

    // Annotation:
    // input: a var = an array of objects with 3 keys of name, neighborhood and beers
    // no parameters so this will need to look at all breweries and look for the beer with the
    // highest ABV value and return the entire beer object of it.
    // Use a reduce to generate an array of all beer objects
    // Use a sort to arrange them in ascending order and return the [0] index.
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    let justTypeGames = boardGames[type].map(gameArray => {
      return gameArray.name;
    })

    return justTypeGames;

    // Annotation:
    // input: an object with properties of strategy, party and childrens that each contain an array of objects that are games
    // output: an array that is just the names of the games decided by the argument passed in
    // steps: boardGames[type] should access the property's array we want
    // run a map on that assigned to a justNames variable that creates just names of those games
    // and then return that arry in the main function
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]
    let justTypeGames = this.listGames(type);
    return justTypeGames.sort();

    // Annotation:
    // input: an object with properties of strategy, party and childrens that each contain an array of objects that are games
    // output: an array of just the game type argument passed in names but sorted alphabetically
    // Use previous method, assign it to a variable and sort it alphabetically
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    let highestRatingGame = boardGames[type].reduce((topGame, game) => {
      if (game.rating > topGame.rating) {
        topGame = game;
      }
      return topGame;
    })
    return(highestRatingGame);

    // Annotation:
    // input: an object with properties of strategy, party and childrens that each contain an array of objects that are games
    // output: return an object that is just the highest rated game in eace type array
    // Run a map to get just the game of each type, then reduce it with a sort to find
    // the highest rating in each category
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    let totalRating = boardGames[type].reduce((total, game) => {
      total += game.rating;
      return total;
    }, 0)

    return totalRating / boardGames[type].length;

    // Annotation:
    // input: an object with properties of strategy, party and childrens that each contain an array of objects that are games
    // output: return a number that represents the average rating for each array of games
    // Use reduce to produce a number representing the total rating score then divide it by the array length for an average and return that.
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    let filteredGames = boardGames[type].filter(game => {
      return game.maxPlayers === maximumPlayers});

    let totalRating = filteredGames.reduce((total, game) => {
      total += game.rating;
      return total;
    }, 0)

    return totalRating / filteredGames.length;

    // Annotation:
    // input: an object with properties of strategy, party and childrens that each contain an array of objects that are games
    // output: return the average rating of just the games that are equal to the argument of maximum players
    // May use above method to average, but need to add a conditional or filter of max playeers
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    let studentsPerTeacher = instructors.map(instructor => {
      return {'name': instructor.name, 'studentCount': (cohorts.find(cohort => cohort.module === instructor.module).studentCount)};
    })

    return studentsPerTeacher;

    // Annotation:
    // input: instructors = array of objs [{name, module, teaches: []}]
    // cohorts = array of objs [{cohort, module, studentCount, curriculum: []}]
    // output: an array of objects, {name: 'instructor.name, studentCount:
    // (sum of student count for the module they each teach)}
    // Create an array of objects with instructors.map
    // Use find to match up the module they teach then assign studentCount with
    // a find method

  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    let insPerMod = instructors.reduce((obj, ins) => {
      if (!obj[ins.module]) {
        obj[ins.module] = 0;
      }
      obj[ins.module] += 1;
      return obj;
    }, {});
    
    let insPerCohort = cohorts.reduce((obj, cohort) => {
      let objKey = `cohort${cohort.cohort}`;
      obj[objKey] = (cohort.studentCount / insPerMod[cohort.module]);
      return obj;
    }, {})
    return insPerCohort;
    // Annotation:
    // input: same as above
    // output: an object with properties of cohort and value is students per instructor
    // Use reduce on instructors - produce an object with the module # and a value
    // of how many teachers there are teaching it
    // Use reduce on cohorts to create an object with cohort.cohort: (modObj.find(mod => mod.name === cohort.module).studentCount) / mod.num
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    let modsForTeach = instructors.reduce((obj, ins) => {
      if (!obj[ins.name]) {
        obj[ins.name] = [];
      }
      cohorts.forEach(cohort => {
        if (cohort.curriculum.some(subject => ins.teaches.includes(subject))) {
          obj[ins.name].push(cohort.module)
        }
      })
      return obj;
    }, {})
    return modsForTeach;

    // Annotation:
    // input: same as above
    // output: an object with keys of instructors.name with values of mod numbers
    // they can teach bashed on if instructors.teaches if they have all the
    // cirriculum in cohorts.curriculum;
    // Use instructors.reduce to create an object with instructor.name as a key
    // and assign that to an empty array if it has not yet been created.
    // Then use cohorts.forEach and cohort.includes(instructor.teaches)
    // If true, instructor.name.push(cohort.module)
    // Return the object
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    let subjectObj = cohorts.reduce((obj, cohort) => {
      cohort.curriculum.forEach(subject => {
        if (!obj[subject]) {
          obj[subject] = [];
        }
        instructors.forEach(ins => {
          ins.teaches.forEach(teach => {
            if (teach === subject && !obj[subject].includes(ins.name)) {
              obj[subject].push(ins.name)
            }
          })
        })
      })
      return obj;
    }, {})

    return subjectObj;

    // Annotation:
    // input: same
    // output: an object with keys of subjects and valus of an array of ins that teach it
    // Create an object by cohorts.reduce with keys of cohort.curriculum if the 
    // key doesn't exist yet.
    // Then use forEach on instructors. instructors.forEach(ins => ins.teaches)
    // Use a conditional with includes(keyName) then assign it to the
    // object created and return the object
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    let bossArray = Object.keys(bosses).map(bossKey => {
      return {'bossName': bosses[bossKey].name, 'sidekicks': bosses[bossKey].sidekicks.map(sidekick => {
        let loyalty;
        sidekicks.forEach(sK => {
          if (sK.name === sidekick.name) {
            loyalty = sK.loyaltyToBoss;
          }
        })
        return loyalty;
      })};
    }).map(boss => {
      let loyalty = boss.sidekicks.reduce((total, num) => {
        return total += num;
      }, 0)
      return {'bossName': boss.bossName, 'sidekickLoyalty': loyalty}
    })
    return bossArray;



    // Annotation:
    // input: bosses - an object with properties of bosses, that are each objects
    // that have the properties name, archnemesis, goal, sidekicks [{name, dispensability}
    // weakness [], and signatureMove
    // sidekicks - an array of objects eith name, associates, strengths, boss, and 
    // loyalty to boss as properties
    // output: an array of objects that have properties of bossName and
    // sidekickLoyalty which is the total of all sidekick.loyaltyToBoss
    // Use Object.keys to create an array of the bosses names
    // Use that array to map an array with bosses each represented as an object
    // Use filter to associate their sidekicks from the property to the sidekicks dataset
    // Use reduce on each object in the array to get their sum of sidekickLoyalty
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    let starsInConst = Object.keys(constellations).map(key => constellations[key]).reduce((arr, star) => {
      star.starNames.forEach(star => arr.push(star));
      return arr;
    }, [])

    let filteredStars = stars.filter(star => starsInConst.includes(star.name));
    let returnStars = [filteredStars[0], filteredStars[2], filteredStars[1], filteredStars[3]]

    return returnStars;

    // Annotation:
    // input: constellations - obj with props of orion, ursaMajor, ursaMinor objs
    // stars - array of objs
    // output: a filtered array of stars, only those listed in constellations properties
    // Create an array of just starName in all three constellations props by
    // using Object.keys with a map to create an array of obj, then reduce
    // to make just a starName array.
    // Then filter the stars array with a conditional if it is included in the above array.
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    let starColors = stars.reduce((obj, star) => {
      if (!obj[star.color]) {
        obj[star.color] = [];
      }
      obj[star.color].push(star);
      return obj
    }, {})

    return starColors;

    // Annotation:
    // input: same
    // output: an object that has keys of a color, values of arrays of starts
    // that match that color
    // Use reduce on stars to construct an object with keys, use condition to make
    // a new key if it doesn't exist with empty array then push that star in to it
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    let constBright = stars.sort((a, b) => {return a.visualMagnitude - b.visualMagnitude}).map(star => {
      if (star.constellation) {
        return star.constellation;
      }
    }).filter(star => (star));
    return constBright;

    // Annotation:
    // input: same - I think just need stars array here
    // output: an array of strings - names of constellations in order of brightness
    // Use map on stars, to return just const names, also use sort to assemble them in order
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    let weaponsArray = Object.keys(weapons).map(key => {
      return {'name': key, 'damage': weapons[key].damage};
    })
    let damageTotal = characters.reduce((total, char) => {
      let wepTotal = 0;
      char.weapons.forEach(weapon => {
        let foundWeapon = weaponsArray.find(wep => wep.name === weapon);
        wepTotal += foundWeapon.damage;
      })
      return total += wepTotal;
    }, 0)
    return damageTotal;

    // Annotation:
    // input: characters - array of objects, weapons - obj w/ weapon properties
    // output: a number that is the total 'damage' for each weapn that all characters can use
    // Use Object.keys on weapons, map the keys to create an array for each
    // weapon. Use a conditional to filter them to be only weapons that exist in
    // the charachters.weapons arrays, then use reduce to sum all of the total damage
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    let weaponsArray = Object.keys(weapons).map(key => {
      return {'name': key, 'damage': weapons[key].damage, 'range': weapons[key].range};
    })
    let charArray = characters.map(char => {
      let charObj = {[char.name]: {'damage': 0, 'range': 0}};
      char.weapons.forEach(charWepName => {
        weaponsArray.forEach(wep => {
          if (wep.name === charWepName) {
            charObj[char.name].damage += wep.damage;
            charObj[char.name].range += wep.range;
          }
        })
      })
      return charObj;
    })
    return charArray;

    // Annotation:
    // input: same
    // output: an array of objects - each object represents a character and
    // have one property (name: {damage: #, range: #})
    // Make a weapons array similar to weaponsArray above but keep all properties
    // Then characters.map() to create an array of new objects
    // Use find and forEach to associate the characters with the weapons data
    // then use reduce to total all weapons total range and damage
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    let awesomeDinos = movies.reduce((obj, movie) => {
      obj[movie.title] = 0;
      movie.dinos.forEach(dino => {
        if (dinosaurs[dino].isAwesome) {
          obj[movie.title] += 1;
        }
      })
      return obj;
    }, {})
    return awesomeDinos;

    // Annotation:
    // input: dinosaurs - an object with keys of dinosaur names and each have a value of
    // an object with three keys of carnivore, herbivore and isAwesome (all booleans)
    // humans - an object with keys of names - value of an object with properties of
    // yearBorn, nationality and imdbStarMeterRating
    // movies - an array of objects representing a movie - properties of title, director,
    // leadingActor, cast, dinos, cast, dinos, yearReleased, hasOscar, millionsGrossed
    // output: an object with keys of all movies.title and values of how many dinos isAwesome
    // is true
    // Use reduce on movies, return an object with a key for each and initialize it
    // with a value of zero. Then use a for each to add and reassaign that value if the
    // dino in the movie isAwesome
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    let moviesByDir = movies.reduce((obj, mov) => {
      if (!obj[mov.director]) {
        obj[mov.director] = {[mov.title]: (
          mov.cast.reduce((sum, actor) => {
            sum += (mov.yearReleased - humans[actor].yearBorn)
            return sum;
          }, 0)
        )};
      } else {
        obj[mov.director][mov.title] = (
          mov.cast.reduce((sum, actor) => {
            sum += (mov.yearReleased - humans[actor].yearBorn)
            return sum;
          }, 0)
        );
      }
      let totalYears = obj[mov.director][mov.title];
      obj[mov.director][mov.title] = Math.floor((totalYears / mov.cast.length));
      return obj;
    }, {})
    
    return moviesByDir;

    // Annotation:
    // input: same
    // output: an object that has properties of directors of movies - each with
    // a value the movies they directed and the average age of the cast on the year it
    // was released.
    // Create an object with movies.reduce making each director a property with values
    // of an object of the movies.title they directed and initially assign it to an array of
    // the cast. Then need to associate the cast with humans[cast.name], find out how old
    // they were on the movie release date by subtracting it from the release date.
    // Then use reduce to sum and average it down to return one number.
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), 
    their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    let allActors = Object.keys(humans).map(key => {
      let actor = humans[key];
      actor = {'name': key,
      'nationality': actor.nationality,
      'imdbStarMeterRating': actor.imdbStarMeterRating,}
      return actor;
    })

    let actorsNotInMovies = [];
    
    allActors.forEach(actor => {
      let inMovie = false;
      movies.forEach(movie => {
        if (movie.cast.includes(actor.name)) {
          inMovie = true;
        }
      })
      if (!inMovie) {
        actorsNotInMovies.push(actor);
      }
    })

    actorsNotInMovies.sort((a, b) => {
      let nationA = a.nationality;
      let nationB = b.nationality;
      if (nationA > nationB) {
        return 1;
      }
      if (nationB > nationA) {
        return -1;
      }
    });

    return actorsNotInMovies;



    // Annotation:
    // input: same
    // output: an array of objects - a filtered list of humans that were not in any movies
    // Use Object.keys(humans).map(human =>) to create an array from the humans object
    // then use a filter on that array comparing them to the moveis with a nested forEach
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s)
    they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

      let allActors = Object.keys(humans).map(key => {
        let actor = humans[key];
        actor = {'name': key,
        'yearBorn': actor.yearBorn,
        'ages': [],}
        return actor;
      })

      let actorsInMovies = [];
      
      allActors.forEach(actor => {
        let inMovie = false;
        movies.forEach(movie => {
          if (movie.cast.includes(actor.name)) {
            inMovie = true;
          }
        })
        if (inMovie) {
          actorsInMovies.push(actor);
        }
      })

      actorsInMovies.forEach(actor => {
        movies.forEach(movie => {
          if (movie.cast.includes(actor.name)) {
            actor.ages.push(movie.yearReleased - actor.yearBorn)
          }
        })
      })

      let finalArray = actorsInMovies.map(actor => {
        actor = {
          'name': actor.name,
          'ages': actor.ages
        };
        return actor;
      })
      return finalArray;

    // Annotation:
    // input: same
    // output: an array of objects - key of name, and ages [age in each movie they were in]
    // Use Object.keys(humans).map() to make an array of human objects like above but leave year born in
    // Use forEach on movies and casts similar to above to identify the actor in a movie
    // then subtract the year they were born from the year the movie was made
    // Remove the yearBorn property and return the array
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
