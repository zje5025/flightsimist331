class Timer {
    min = 0;
    sec = 0;
    paused = false;
    _timer; // internal timer variable

    constructor() { }

    _intervalFunc = () => {
        if (!this.paused) {
            // Update minute and reset seconds
            if (this.sec === 59) {
                this.min++;
                this.sec = 0;
            } else {
                this.sec++;
            }
            this._updateTimeDisplay();
        }
    }

    _updateTimeDisplay() {
        // Format time to have 2 digits each
        const minsString = this.min.toString().padStart(2, '0');
        const secString = this.sec.toString().padStart(2, '0')
        document.getElementById('sim-time').innerHTML = `${minsString}:${secString}`;
    }

    start() {
        this._timer = setInterval(this._intervalFunc, 1000);
        return this._timer;
    }

    pause() {
        this.paused = true;
    }

    resume() {
        this.paused = false;
    }

    stop() {
        clearInterval(this._timer);
        this.min = 0;
        this.sec = 0;
        this._updateTimeDisplay();
    }

    restart() {
        this.stop();
        this.start();
    }
}
