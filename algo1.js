/**
 * 
 * @param {My Temperatures in Celsius} yourTemps 
 * @param {My Friends Temperatures in Fahrenheit} friendsTemps 
 * 
 * The point is basically to see which days were hotter in my friend's city.
 */

function celsiusVsFahrenheit(yourTemps, friendsTemps) {
    let myFahrenTemps = yourTemps.map(temp => (9 * temp / 5) + 32);
    let greaterTemps = [];

    for (let i = 0; i < friendsTemps.length; i++) {
      if (friendsTemps[i] > myFahrenTemps[i]) {
        greaterTemps.push(friendsTemps[i]);
      }
    }
    
    return greaterTemps.length;
}