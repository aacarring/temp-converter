//Selectors
const celsiusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

//Event listeners
celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin); 
fahrenheitInput.addEventListener('input', );
kelvinInput.addEventListener('input', );

//Functions
function celsiusToFahrenheitAndKelvin() {
    const cTemp = parseFloat(celsiusInput.value);
    const fTemp = cTemp * (9/5) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;
}

function fahrenheitToCelsiusAndKelvin() {

}

function kelvinToCelsiusAndFahrenheit() {
    
}