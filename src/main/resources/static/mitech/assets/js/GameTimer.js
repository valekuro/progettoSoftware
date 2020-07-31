function Timer(delay, callbacks) {
    if (Object.prototype.toString.call(callbacks) === "[object Function]") {
        callbacks = [callbacks];
    }
    this.callbacks = callbacks;
    var that = this;
    var id = setInterval(function tick() {
        if (!that.running)
            return;
        for (var i = 0; i < that.callbacks.length; i++) {
            that.callbacks[i].call(that);
        }
        that.count++;
    }, delay);
    this.__defineGetter__('id', function () {
        return id
    });
    this.__defineGetter__('delay', function () {
        return delay
    });
    Timer.all.push(this);
}
Timer.prototype.running = true;
Timer.prototype.count = 0;
Timer.prototype.pause = function pause() {
    this.running = false;
    return this;
};
Timer.prototype.run = function run() {
    this.running = true;
    return this;
};
Timer.prototype.stop = function stop() {
    // Unlike pause, once you stop timer, you can't run it again
    clearInterval(this.id);
    this.stopped = true;
    return this;
};

Timer.all = [];
Timer.all.pause = function pause() {
    var all = Timer.all;
    for (var i = 0; i < all.length; i++) {
        all[i].pause();
    }
    return all;
};
Timer.all.run = function run() {
    var all = Timer.all;
    for (var i = 0; i < all.length; i++) {
        all[i].run();
    }
    return all;
};
Timer.all.stop = function stop() {
    var all = Timer.all;
    for (var i = 0; i < all.length; i++) {
        all[i].stop();
    }
    return all;
};

Timer.prototype.timeConversion = function timeConversion(millisec) {

   //Get hours from milliseconds
  var hours = milliseconds / (1000*60*60);
  var absoluteHours = Math.floor(hours);
  var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

  //Get remainder from hours and convert to minutes
  var minutes = (hours - absoluteHours) * 60;
  var absoluteMinutes = Math.floor(minutes);
  var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;

  //Get remainder from minutes and convert to seconds
  var seconds = (minutes - absoluteMinutes) * 60;
  var absoluteSeconds = Math.floor(seconds);
  var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;
    document.getElementById("demo").innerHTML = h + ':' + m + ':' + s;
};


    console.log("timer");

const t1 = new Timer(180000, function () {
    console.log("aaapr");
    console.log(this.count);
    if (this.count >= 1) {
        this.stop();
    }
}).run();

var time = t1.timeConversion(180000);

