class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  get currentTemperature() {
    return this.temperature;
  }

  tempUp() {
    return this.temperature += 1;
  }

  tempDown() {
    return this.temperature -= 1;
  }
}