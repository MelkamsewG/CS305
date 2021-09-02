function convertFahrenheit(fahrenheit) {

    let tempInCelsius = (fahrenheit - 32) * 5 / 9;
    console.log(tempInCelsius.toFixed(2));
}
console.log(convertFahrenheit(39));