function my_Clock() 
  {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  }
  
my_Clock.prototype.run = function ()
  {
  setInterval(this.update.bind(this), 1000);
  };
  
  
my_Clock.prototype.update = function () 
  {
  this.updateTime();
  if(this.hours<10 && this.minutes<10 && this.seconds<10){console.log("0" + this.hours + ":0" + this.minutes + ":0" + this.seconds)}
  else if(this.hours<10 && this.seconds<10){console.log("0" + this.hours + ":" + this.minutes + ":0" + this.seconds)}
  else if(this.hours<10 && this.minutes<10){console.log("0" + this.hours + ":0" + this.minutes + ":" + this.seconds)}
  else if(this.minutes<10 && this.seconds<10){console.log(this.hours + ":0" + this.minutes + ":0" + this.seconds)}
  else if(this.minutes<10){console.log(this.hours + ":0" + this.minutes + ":" + this.seconds)}
  else if(this.seconds<10){console.log(this.hours + ":" + this.minutes + ":0" + this.seconds)}
  else if(this.hours<10){console.log("0" + this.hours + ":" + this.minutes + ":0" + this.seconds)}
  else {console.log(this.hours + ":" + this.minutes + ":" + this.seconds);}
  };
  
  
my_Clock.prototype.updateTime = function () 
  {
  this.seconds+= 1;
 if (this.seconds >= 60)
  {
  this.minutes++;
  this.seconds= 0;
  }
 if (this.minutes >= 60)
  {
  this.hours++;
  this.minutes=0;
  }
if (this.hours >= 24)
  {
  this.hours = 0;
  }
};
var clock = new my_Clock();
  clock.run();