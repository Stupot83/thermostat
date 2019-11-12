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

    describe('power saving mode', () => {
      it('has an attribute of psm', () => {
        expect(typeof thermostat.psm).toEqual("boolean");
      });

      it('has power saving mode set to on by default', () => {
        expect(thermostat.psm).toEqual(true);
      });
    });

    describe('isPsmOn function', () => {
      it('responds to isPsmOn', () => {
        expect(typeof thermostat.isPsmOn).toEqual("boolean");
      });

      it('returns true when initialised', () => {
        expect(thermostat.isPsmOn).toEqual(true);
      });
    });

    describe('turnPsmOff function', () => {
      it('responds to turnPsmOff', () => {
        expect(typeof thermostat.turnPsmOff).toEqual("function");
      });

      it('sets psm to false', () => {
        thermostat.turnPsmOff();
        expect(thermostat.psm).toEqual(false);
      });

      it('can switch psm off', () => {
        thermostat.turnPsmOff();
        expect(thermostat.isPsmOn).toBe(false);
      });
    });

    describe('turnPsmOn function', () => {
      it('responds to turnPsmOn', () => {
        expect(typeof thermostat.turnPsmOn).toEqual("function");
      });

      it('sets psm to true', () => {
        thermostat.turnPsmOff();
        expect(thermostat.isPsmOn).toBe(false);
        thermostat.turnPsmOn();
        expect(thermostat.isPsmOn).toEqual(true);
      });
    });

    describe('max_temp_psm_off initialisation', () => {
      it('has an attribute of max_temp_psm_off', () => {
        expect(typeof thermostat.max_temp_psm_off).toEqual("number");
      });

      it('is 32 when initialised', () => {
        expect(thermostat.max_temp_psm_off).toEqual(32);
      });
    });

    describe('max_temp_psm_on initialisation', () => {
      it('has an attribute of max_temp_psm_on', () => {
        expect(typeof thermostat.max_temp_psm_on).toEqual("number");
      });

      it('is 25 when initialised', () => {
        expect(thermostat.max_temp_psm_on).toEqual(25);
      });
    });

    describe('isMaxTemp function', () => {
      it('responds to isMaxTemp', () => {
        expect(typeof thermostat.isMaxTemp).toEqual("boolean");
      });

      it('returns true when temp is 25 and psm is on', () => {
        thermostat.turnPsmOn();
        thermostat.temperature = 25;
        expect(thermostat.isMaxTemp).toEqual(true);
      });

      it('returns false when temp is more than 25 and psm is on', () => {
        thermostat.turnPsmOn();
        thermostat.temperature = 26;
        expect(thermostat.isMaxTemp).toEqual(false);
      });

      it('returns false when temp is less than 25 and psm is on', () => {
        thermostat.turnPsmOn();
        thermostat.temperature = 5;
        expect(thermostat.isMaxTemp).toEqual(false);
      });

      it('returns true when temp is 32 and psm is off', () => {
        thermostat.turnPsmOff();
        thermostat.temperature = 32;
        expect(thermostat.isMaxTemp).toEqual(true);
      });

      it('returns false when temp is more than 32 and psm is off', () => {
        thermostat.turnPsmOff();
        thermostat.temperature = 45;
        expect(thermostat.isMaxTemp).toEqual(false);
      });

      it('returns false when temp is less than 32 and psm is off', () => {
        thermostat.turnPsmOff();
        thermostat.temperature = 5;
        expect(thermostat.isMaxTemp).toEqual(false);
      });
    });


    describe('when power saving mode is on', () => {
      it('has a maximum temperature of 25 degrees', () => {
        for (var i = 0; i < 6; i++) {
          thermostat.tempUp();
        }
        expect(thermostat.currentTemperature).toEqual(25);
      });
    });

    describe('when power saving mode is off', function() {
      it('has a maximum temperature of 32 degrees', function() {
        thermostat.turnPsmOff();
        for (var i = 0; i < 13; i++) {
          thermostat.tempUp();
        }
        expect(thermostat.currentTemperature).toEqual(32);
      });
    });

  });
  
}());
