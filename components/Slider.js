import React from 'react'


class Slider extends React.Component {

    constructor(props) {
        super(props)


        this.scrollings = [];
        this.prevTime = 

        var prevTime = new Date().getTime();

        this.addMouseWheelHandler();
    }

    addMouseWheelHandler() {
        var prefix = '';
        var _addEventListener;

        if (window.addEventListener) {
            _addEventListener = "addEventListener";
        } else {
            _addEventListener = "attachEvent";
            prefix = 'on';
        }

        // detect available wheel event
        var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
            document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


        if (support == 'DOMMouseScroll') {
            document[_addEventListener](prefix + 'MozMousePixelScroll', this.mouseWheelHandler.bind(this), false);
        }

        //handle MozMousePixelScroll in older Firefox
        else {
            document[_addEventListener](prefix + support, this.mouseWheelHandler.bind(this), false);
        }
    }


    mouseWheelHandler(e) {
        let self = this;

        var curTime = new Date().getTime();


        // cross-browser wheel delta
        e = e || window.event;
        var value = e.wheelDelta || -e.deltaY || -e.detail;
        var delta = Math.max(-1, Math.min(1, value));

        var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
        var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection);

        //Limiting the array to 150 (lets not waste memory!)
        if (this.scrollings.length > 149) {
            this.scrollings.shift();
        }

        //keeping record of the previous scrollings
        this.scrollings.push(Math.abs(value));


        //time difference between the last scroll and the current one
        var timeDiff = curTime - prevTime;
        prevTime = curTime;

        //haven't they scrolled in a while?
        //(enough to be consider a different scrolling action to scroll another section)
        if (timeDiff > 200) {
            //emptying the array, we dont care about old scrollings for our averages
            this.scrollings = [];
        }

        if (canScroll) {
            var averageEnd = getAverage(scrollings, 10);
            var averageMiddle = getAverage(scrollings, 70);
            var isAccelerating = averageEnd >= averageMiddle;

            //to avoid double swipes...
            if (isAccelerating && isScrollingVertically) {
                //scrolling down?
                if (delta < 0) {
                    console.log('down');

                    //scrolling up?
                } else {
                    console.log('up');
                }
            }
        }

        return false;
    }

    render() {
        return (
            <div className="slider">
                <div className="slide">1</div>
                <div className="slide">2</div>
                <div className="slide">3</div>
            </div>
        )
    }
}
export default Slider