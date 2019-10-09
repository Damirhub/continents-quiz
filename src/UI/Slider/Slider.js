import React from "react";
import Slider from "react-slick";

class SliderWrapper extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { swiped: false };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.swipeOn = this.swipeOn.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    swipeOn() {
        // alert("wisisi")
        this.setState({
            swiped: true
        });
    }

    render() {

        const childWithProp = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, this.next);
        });

        var settings = {
            dots: false,
            // swipe: this.state.swiped
        };

        return (
            <div className="container">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {childWithProp}
                </Slider>
            </div>
        );
    }
}

export default SliderWrapper;
