document.addEventListener('DOMContentLoaded', function () {
    const convertButton = document.getElementById('convertBtn');
    const inputTemperature = document.getElementById('inputTemp');
    const fromUnit = document.getElementById('fromUnit');
    const result = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        const temperature = parseFloat(inputTemperature.value);

        if (isNaN(temperature)) {
            result.innerHTML = 'Please enter a valid number.';
            return;
        }

        const from = fromUnit.value;
        let to, convertedTemperature;

        switch (from) {
            case 'celsius':
                to = 'fahrenheit';
                convertedTemperature = (temperature * 9/5) + 32;
                break;
            case 'fahrenheit':
                to = 'celsius';
                convertedTemperature = (temperature - 32) * 5/9;
                break;
            case 'kelvin':
                to = 'celsius';
                convertedTemperature = temperature - 273.15;
                break;
        }

        result.innerHTML = `${temperature.toFixed(2)} ${from.toUpperCase()} is ${convertedTemperature.toFixed(2)} ${to.toUpperCase()}`;
    });
});
