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
      it('responds to currentTemperature', () => {
        expect(typeof thermostat.currentTemperature).toEqual("number");
      });

      it('returns the current temperature when first initialised', () => {
        expect(thermostat.currentTemperature).toEqual(20);
      });
    });

    describe('temperature up function', () => {
      it('responds to tempUp', () => {
        expect(typeof thermostat.tempUp).toEqual("function");
      });

      it('returns the current temperature when first initialised', () => {
        thermostat.tempUp();
        expect(thermostat.currentTemperature).toEqual(21);
      });
    });

    describe('temperature down function', () => {
      it('responds to tempDown', () => {
        expect(typeof thermostat.tempDown).toEqual("function");
      });

      it('returns the current temperature when first initialised', () => {
        thermostat.tempDown();
        expect(thermostat.currentTemperature).toEqual(19);
      });
    });

    describe('minimum temperature initialisation', () => {
      it('has an attribute of minimum_temp', () => {
        expect(typeof thermostat.minimum_temp).toEqual("number");
      });

      it('initialises with a minimum_temp of 10 degrees', () => {
        expect(thermostat.minimum_temp).toEqual(10);
      });
    });

    describe('minimum temperature function', () => {
      it('responds to isMinimumTemp', () => {
        expect(typeof thermostat.isMinimumTemp).toEqual("boolean");
      });

      it('initialises with a minimum_temp of 10 degrees', () => {
        thermostat.temperature = 10;
        expect(thermostat.isMinimumTemp).toEqual(true);
      });

      it('has a minimum of 10 degrees', () => {
        for (let i = 0; i < 11; i++) {
          thermostat.tempDown();
        }
        expect(thermostat.currentTemperature).toEqual(10);
      });
    });

  });
  
}());
