$(document).ready(() => {

  const updateTemp = () => {
    $('#temperature').text(thermostat.temperature);
    if(thermostat.energyUsage() === 'low-usage') {
      $('#temperature').css('color', 'green');
    } else if(thermostat.energyUsage() === 'medium-usage') {
      $('#temperature').css('color', 'black');
    } else {
      $('#temperature').css('color', 'red');
    }
  };

  const displayWeather = city => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    let token = '&appid=2772d7d77057b58ebc7e65e392ba0a3f';
    let units = '&units=metric';
    $.get(url + token + units, data => {
      $('#current-temperature').text(data.main.temp);
    });
  };

  const thermostat = new Thermostat();
  updateTemp();

  $('#temp-up').click(() => {
    thermostat.tempUp();
    updateTemp();
  });

  $('#temp-down').click(() => {
    thermostat.tempDown();
    updateTemp();
  });

  $('#temp-reset').click(() => {
    thermostat.resetTemp();
    updateTemp();
  });

  $('#psm-on').click(() => {
    thermostat.turnPsmOn();
    $('#power-saving').text('on');
    updateTemp();
  });

  $('#psm-off').click(() => {
    thermostat.turnPsmOff();
    $('#power-saving').text('off');
    updateTemp();
  });

  displayWeather('London');

  $('#select-city').submit(event => {
    event.preventDefault();
    let city = $('#current-city').val();
    displayWeather(city);
  });
});