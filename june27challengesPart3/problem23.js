/*The first century spans from the year 1 up to and 
including the year 100, the second century - from the 
year 101 up to and including the year 200, etc.
Given a year, return the century it is in. */

function century(year) {
    const centurY = Math.ceil(year/100);
    console.log(centurY);
  }
century(1501);



