/**

* Returns an array of country names sorted in descending order by population
* 
* @param {object[]} arr - The input array. Objects will be in the form: { country: "foo", population: 10 }
* @returns {string[]} - Returns an array of country names, sorted by their population in descending order
* 
*/

function getCountriesSortedByPopulation(arr) {
    return arr.sort((country1, country2) => country2.population - country1.population).map(arr => arr.country)
   
}


module.exports = getCountriesSortedByPopulation
