import React from 'react'
import {TweenMax} from 'gsap';


export default class extends React.Component {

    constructor(props) {
        super(props)

        console.log(props);
    }

    // handling escape close
    componentDidMount() {
        this.loaderTween = TweenLite.to(this.loaderWrap, 1, {
            x: "100%", ease: Expo.easeInOut, delay: 2
        });
    }

    componentWillMount() {
        console.log('asdf');
    }


    render() {
        <style jsx>{`
          .parallax-inner {
            background-color: #fff;
            border-bottom: 1px solid #eee;
            color: #222;
          }
          `}
        </style>

        return (
            <div className="parallax-background" ref={div => this.loaderWrap = div}>
                {this.props.children}
            </div>
        )
    }
}