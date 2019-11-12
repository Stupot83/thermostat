(function () {
  'use strict';

  describe('Thermostat', () => {

    let thermostat;

    beforeEach(() => {
      thermostat = new Thermostat();
    });

    describe('Thermostat initialisation', () => {
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

    describe('current temperature function', () => {
      it('is responds to currentTemperature', () => {
        expect(typeof thermostat.currentTemperature).toEqual("number");
      });

      it('returns the current temperature when first initialised', () => {
        expect(thermostat.currentTemperature).toEqual(20);
      });
    });

    describe('temperature up function', () => {
      it('is responds to tempUp', () => {
        expect(typeof thermostat.tempUp).toEqual("function");
      });

      it('returns the current temperature when first initialised', () => {
        thermostat.tempUp();
        expect(thermostat.currentTemperature).toEqual(21);
      });
    });

    describe('temperature down function', () => {
      it('is responds to tempDown', () => {
        expect(typeof thermostat.tempDown).toEqual("function");
      });

      it('returns the current temperature when first initialised', () => {
        thermostat.tempDown();
        expect(thermostat.currentTemperature).toEqual(19);
      });
    });

  });
  
}());
