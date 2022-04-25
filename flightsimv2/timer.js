class Timer {
    min = 0;
    sec = 0;
    paused = false;
    _timer;

    constructor() { }

    start() {
        this._timer = setInterval(() => {
            if (!this.paused) {
                // Update minute and reset seconds
                if (this.sec === 60) {
                    this.min++;
                    this.sec = 0;
                }
                // Format time to have 2 digits each
                const minsString = this.min.toString().padStart(2, '0');
                const secString = this.sec.toString().padStart(2, '0')
                document.getElementById('sim-time').innerHTML = `${minsString}:${secString}`;
                this.sec++;
            }
        }, 1000);
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
    }
}
