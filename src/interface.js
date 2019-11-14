$(document).ready(() => {

  const updateTemp = () => {
    $('#temperature').text(thermostat.temperature);
    if(thermostat.energyUsage() === 'Low') {
      $('#temperature').css('color', 'green');
      $('#progress-bar').css('background-color', 'green');
    } else if(thermostat.energyUsage() === 'Medium') {
      $('#temperature').css('color', 'orange');
      $('#progress-bar').css('background-color', 'orange');
    } else {
      $('#temperature').css('color', 'red');
      $('#progress-bar').css('background-color', 'red');
    }
  };

  const changeValue = num => {
    $( "#progress-bar" ).attr('value', num);
    $( "#temp-display" ).text(num);
  };

  const changeUsageText = usage => {
    $("#usage-indicator").attr('class', "usage-text "+usage+"-usage").text(usage);
  };

  const thermostat = new Thermostat();
  updateTemp();

  changeValue(20);

  $('#power-saving').text('On');

  $('#temp-up').click(() => {
    thermostat.tempUp();
    updateTemp();
    changeUsageText(thermostat.energyUsage());
    changeValue(thermostat.currentTemperature);
  });

  $('#temp-down').click(() => {
    thermostat.tempDown();
    updateTemp();
    changeUsageText(thermostat.energyUsage());
    changeValue(thermostat.currentTemperature);
  });

  $('#temp-reset').click(() => {
    thermostat.resetTemp();
    updateTemp();
    changeUsageText(thermostat.energyUsage());
    changeValue(thermostat.currentTemperature);
  });

  $('#psm-on').click(() => {
    thermostat.turnPsmOn();
    $('#power-saving').text('On');
    updateTemp();
    changeUsageText(thermostat.energyUsage());
    changeValue(thermostat.currentTemperature);
  });

  $('#psm-off').click(() => {
    thermostat.turnPsmOff();
    $('#power-saving').text('Off');
    updateTemp();
    changeUsageText(thermostat.energyUsage());
    changeValue(thermostat.currentTemperature);
  });

  $("#enter-city").submit(() => {
    event.preventDefault();
    var city = $("#user-location").val();
    $("#enter-city").addClass("hidden");
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+",uk&appid=9414ea80d47c1479b6d06ffc6e002d0f&units=metric", data => {
      $("#local-temp").text(data.name+": "+data.main.temp).parent().toggleClass("hidden");
    });
  });
});