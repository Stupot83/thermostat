(function () {
  'use strict';

  describe('Thermostat initialisation', () => {
    let thermostat;

    beforeEach(() => {
      thermostat = new Thermostat();
    });

    it('instantiates the Thermostat class successfully', () => {
      expect(thermostat).toBeInstanceOf(Thermostat);
    });

    it('is an object when created', () => {
      expect(typeof thermostat).toEqual("object");
    });

    it('responds to the attribute of temperature', () => {
      expect(typeof thermostat.temperature).toEqual("number");
    });

    it('initialises with a temperature of 20 degrees', () => {
      expect(thermostat.temperature).toEqual(20);
    });
  });
  
}());
