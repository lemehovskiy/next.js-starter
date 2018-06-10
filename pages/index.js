import React from 'react'
import Router from 'next/router'
import Link from 'next/link'


import ReactParallaxContent from './../components/rect-parallax-content'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    // handling escape close
    componentDidMount() {
        // this.loaderTween = TweenLite.to(this.loaderWrap, 1, {
        //     x: "100%", ease: Expo.easeInOut, delay: 2
        // });
    }

    componentWillMount() {

        // console.log('asdf');
    }


    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };


        return (
            <ReactParallaxContent {...settings}>
                <div className="parallax-inner" style={{ backgroundImage: `url(/static/imgs/hs_err_pid689.jpg)` }}>
                    sdf
                </div>
            </ReactParallaxContent>
        );
    }
}