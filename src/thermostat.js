class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimum_temp = 10;
  }

  get currentTemperature() {
    return this.temperature;
  }

  get isMinimumTemp() {
    return this.temperature === this.minimum_temp;
  }

  tempUp() {
    return this.temperature += 1;
  }

  tempDown() {
    return this.temperature -= 1;
  }
}