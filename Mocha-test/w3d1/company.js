"use strict"

let company = { // the same object, compressed for brevity
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 600
    }],
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };
  
  // The function to do the job
  function collectNames(department) {
    if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => {
        console.log('prev is: ', prev);
        prev.push(current.name);
        console.log('prev is: ', prev);
        return prev;
      }, []); // get the names
    } else { // case (2)
      let names = [];
      for (let subdep of Object.values(department)) {
        console.log("names 1 is: ", names);
        let subdepNames = collectNames(subdep)
        console.log("subdepNames: ", subdepNames);
        names.concat(subdepNames); // recursively call for subdepartments, sum the results
        console.log("names 2 is: ", names);
      }
      return names;
    }
  }
  
  console.log(collectNames(company)); // 6700