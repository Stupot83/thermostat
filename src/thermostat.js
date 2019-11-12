class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimum_temp = 10;
    this.psm = true;
    this.max_temp_psm_off = 32;
    this.max_temp_psm_on = 25;
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

  get isMaxTemp() {
    if (this.isPsmOn === false) {
      return this.temperature === this.max_temp_psm_off;
    }
    return this.temperature === this.max_temp_psm_on;
  }

  turnPsmOff() {
    this.psm = false;
  }

  turnPsmOn() {
    this.psm = true;
  }

  tempUp() {
    if (this.isMaxTemp) {
      return;
    }
    return this.temperature += 1;
  }

  tempDown() {
    if (this.isMinimumTemp) {
      return;
    }
    return this.temperature -= 1;
  }
}