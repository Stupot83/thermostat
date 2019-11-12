class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimum_temp = 10;
    this.psm = true;
  }

  get currentTemperature() {
    return this.temperature;
  }

  get isMinimumTemp() {
    return this.temperature === this.minimum_temp;
  }

  get isPsmOn() {
    return this.psm === true;
  }

  turnPsmOff() {
    this.psm = false;
  }

  turnPsmOn() {
    this.psm = true;
  }

  tempUp() {
    return this.temperature += 1;
  }

  tempDown() {
    if (this.isMinimumTemp) {
      return;
    }
    return this.temperature -= 1;
  }
}