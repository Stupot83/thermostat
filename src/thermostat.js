class Thermostat {
  constructor() {
    this.default_temp = 20;
    this.temperature = this.default_temp;
    this.minimum_temp = 10;
    this.psm = true;
    this.max_temp_psm_off = 32;
    this.max_temp_psm_on = 25;
    this.med_energy_usage_limit = 18;
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

  resetTemp() {
    this.temperature = this.default_temp;
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
    return (this.temperature += 1);
  }

  tempDown() {
    if (this.isMinimumTemp) {
      return;
    }
    return (this.temperature -= 1);
  }

  energyUsage() {
    if (this.temperature < this.med_energy_usage_limit) {
      return 'Low';
    }
    if (this.temperature >= this.med_energy_usage_limit && this.temperature <= this.max_temp_psm_on) {
      return 'Medium';
    }
    return 'High';
  }
}