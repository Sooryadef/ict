function convertFahrenheit(celsius)
{
    let temp=celsius;
    let result=(temp*9/5)+32;
    console.log('celsius value:', result);
}

function convertCelsius(fahrenheit)
{
    let temp=fahrenheit;
    let result=(temp-32)*5/9;
    console.log('fahrenheit value:', result);
}

convertFahrenheit(100)
convertCelsius(100)
