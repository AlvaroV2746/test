// @ts-check

export default class Time {
  // BEGIN (write your solution here)
    toString() {
    return `${this.hours}:${this.minutes}`;
  }
  static fromString(time){
    const timeSplit = time.split(":");
    const newTime = new Time(timeSplit[0], timeSplit[1]);
    console.log(newTime);
    
    return newTime;
  }

  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

}
const time = new Time(10, 15);
console.log(`La hora es ${time}`); // => 'La hora es 10:15'


const time1 = Time.fromString('10:23');
// el método toString() se llama automáticamente
console.log(time1);

console.log(`La hora es ${time1}`); // 'La hora es 10:23'


