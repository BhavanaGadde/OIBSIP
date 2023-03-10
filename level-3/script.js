const tempInput = document.getElementById('temp');
const tempTypeSelect = document.getElementById('temp-type');
const convertedTemp = document.getElementById('converted-temp');
const toggleBtn = document.getElementById('toggle');

function convertTemperature() {
  const temp = parseFloat(tempInput.value);
  const tempType = tempTypeSelect.value;
  
  if (isNaN(temp)) {
    convertedTemp.textContent = '-';
    return;
  }
  
  let newTemp = '';
  
  if (tempType === 'celsius') {
    newTemp = `${temp.toFixed(2)} °C`;
    convertedTemp.textContent = newTemp;
  } else if (tempType === 'fahrenheit') {
    const fahrenheitTemp = (temp * 9/5) + 32;
    newTemp = `${fahrenheitTemp.toFixed(2)} °F`;
    convertedTemp.textContent = newTemp;
  } else if (tempType === 'kelvin') {
    const kelvinTemp = temp + 273.15;
    newTemp = `${kelvinTemp.toFixed(2)} K`;
    convertedTemp.textContent = newTemp;
  }
}

function toggleTempType() {
  const tempType = tempTypeSelect.value;
  
  if (tempType === 'celsius') {
    tempTypeSelect.value = 'fahrenheit';
    tempTypeSelect.innerHTML = '<option value="fahrenheit">Fahrenheit</option><option value="celsius">Celsius</option><option value="kelvin">Kelvin</option>';
  } else if (tempType === 'fahrenheit') {
    tempTypeSelect.value = 'kelvin';
    tempTypeSelect.innerHTML = '<option value="kelvin">Kelvin</option><option value="fahrenheit">Fahrenheit</option><option value="celsius">Celsius</option>';
  } else if (tempType === 'kelvin') {
    tempTypeSelect.value = 'celsius';
    tempTypeSelect.innerHTML = '<option value="celsius">Celsius</option><option value="fahrenheit">Fahrenheit</option><option value="kelvin">Kelvin</option>';
  }
  
  convertTemperature();
}

tempInput.addEventListener('input', convertTemperature);
tempTypeSelect.addEventListener('change', convertTemperature);
toggleBtn.addEventListener('click', toggleTempType);
