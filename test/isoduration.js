if ( typeof require !== 'undefined' )
{
  should = require('should')
  moment = require('moment'),
  require('../moment.isoduration');
}

describe('isoduration', function() {

  describe('fromIsoduration', function() {
    it('should create a moment duration from iso 8601 string with all units', function() {
      var duration = moment.duration.fromIsoduration('P3Y6M7W4DT12H30M5S');
      duration.years().should.equal(3);
      duration.months().should.equal(7);
      duration.weeks().should.equal(3);
      duration.days().should.equal(23);
      duration.hours().should.equal(12);
      duration.minutes().should.equal(30);
      duration.seconds().should.equal(5);
    });

    it('should not require YMD to be included', function() {
      var duration = moment.duration.fromIsoduration('PT3H125M61S');
      duration.hours().should.equal(5, 'Hours are correct');
      duration.minutes().should.equal(6, 'Minutes are correct');
      duration.seconds().should.equal(1, 'Seconds');
    });

    it('should accept decimal representations of time', function() {
      var duration = moment.duration.fromIsoduration('PT25.933015S');
      duration.seconds().should.equal(25.933015);
    });

  });

  describe('isoduration', function() {
    it('should create an iso 8601 duration from a moment duration', function() {
      var duration = moment.duration({
        years: 1,
        days: 2,
        minutes: 61
      });
      duration.isoduration().should.equal('P1Y2DT1H1M');
    })
  })
  
});