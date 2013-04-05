var moment;
if ( typeof require !== 'undefined' )
{
  moment = require('moment');
}

(function(moment) {

  var regex = /P((([0-9]*\.?[0-9]*)Y)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)W)?(([0-9]*\.?[0-9]*)D)?)?(T(([0-9]*\.?[0-9]*)H)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)S)?)?/

  moment.duration.fromIsoduration = function(duration) {
    var matches = duration.match(regex);
    
    return moment.duration({
      years: parseFloat(matches[3]),
      months: parseFloat(matches[5]),
      weeks: parseFloat(matches[7]),
      days: parseFloat(matches[9]),
      hours: parseFloat(matches[12]),
      minutes: parseFloat(matches[14]),
      seconds: parseFloat(matches[16])
    });
  }

  moment.duration.fn.isoduration = function() {
    var duration = 'P'
      + ((this.years())? this.years() + 'Y' : '')
      + ((this.months())? this.months() + 'M' : '')
      + ((this.days())? this.days() + 'D' : '')
      + ((this.hours() || this.minutes() || this.seconds())? 'T' : '')
      + ((this.hours())? this.hours() + 'H' : '')
      + ((this.minutes())? this.minutes() + 'M' : '')
      + ((this.seconds())? this.seconds() + 'S' : '')
    ;

    return duration;
  }

})(moment);