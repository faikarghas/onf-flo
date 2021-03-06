import mobile from '../static/mobile.png'
import atm from '../static/atm.png'
import mandiri from '../static/logo_mandiri.png'
import bri from '../static/bri.png'
import bni from '../static/bni.png'
import bca from '../static/bca.png'


import OwlCarousel from 'react-owl-carousel2';
import '../node_modules/react-owl-carousel2/lib/styles.css'
import Slider from "react-slick";

import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'


import $ from 'jquery';

const options = {
    items: 1,
    nav: true,
    rewind: true,
    mergeFit: true,
    nav: true,
    center: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
};
var settings = {
    // dots: true,
    speed: 500,
    centerMode: true,
    centerPadding: '40px',
    infinite: false,
    arrows: true
  };
class Register extends React.Component{
    state = {
        trans  : 0,
    }
    componentDidMount(){
        this.handleScroll()
    }
    handleScroll = ()=> {

        $(window).scroll(function (event) {
            var el = $('.testpar');
            var scroll = $(document).scrollTop();
            var valueScroll = scroll * 2 /14
            el.css({
                'position':'absolute',
                'top':'144%',
                'left':'50%',
                'transform':`translate(-50%,${-valueScroll}px)`
            });
        });

    }

    render(){
        const {trans} = this.state
        return (
            <React.Fragment>
                <div className="section_topup" style={{position:'relative'}}>
                    <div className="container">
                        <div className="section_topup--title">
                            <h4>NIKMATI KEMUDAHAN TOP UP FLO DARI MANA SAJA</h4>
                        </div>

                        <div className="section_topup--card hidden-down testpar" >
                            <div className="row">
                                <div className="section_topup--card-c1" >
                                    <div className="card">
                                    <div className="card-body">
                                        <div className="row card-body--1">
                                            <img src={mobile} />
                                            <h5>MOBILE <br/>BANKING</h5>
                                        </div>
                                        <div className="row card-body--logo">
                                            <ul>
                                                <li className="man"><img src={mandiri} /></li>
                                                <li><img src={bri} /></li>
                                                <li><img src={bni} /></li>
                                                {/* <li><img src={bca} /></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="section_topup--card-c2" >
                                    <div className="card">
                                    <div className="card-body">
                                        <div className="row card-body--2">
                                            <img src={atm} />
                                            <h5>ATM</h5>
                                        </div>
                                        <div className="row card-body--logo">
                                            <ul>
                                                <li className="man"><img src={mandiri} /></li>
                                                <li><img src={bri} /></li>
                                                <li><img src={bni} /></li>
                                                {/* <li><img src={bca} /></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="section_topup--card hidden-up" >
                        {/* <OwlCarousel options={options}> */}
                        <Slider {...settings}>

                            <div className="section_topup--card-c1 section_topup--card-slider" >
                                    <div className="card">
                                    <div className="card-body">
                                        <div className="row card-body--1">
                                            <img src={mobile} />
                                            <h5>MOBILE <br/>BANKING</h5>
                                        </div>
                                        <div className="row card-body--logo">
                                            <ul>
                                                <li className="man"><img className="man_img" src={mandiri} /></li>
                                                <li><img src={bri} /></li>
                                                <li><img src={bni} /></li>
                                                {/* <li><img src={bca} /></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="section_topup--card-c2 section_topup--card-slider" >
                                    <div className="card">
                                    <div className="card-body">
                                        <div className="row card-body--2">
                                            <img src={atm} />
                                            <h5>ATM</h5>
                                        </div>
                                        <div className="row card-body--logo">
                                            <div className="row card-body--logo">
                                                <ul>
                                                    <li className="man"><img className="man_img" src={mandiri} /></li>
                                                    <li><img src={bri} /></li>
                                                    <li><img src={bni} /></li>
                                                    {/* <li><img src={bca} /></li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                        </Slider>
                        {/* </OwlCarousel> */}
                        </div>
                    </div>
                </div>
                <div className="section_topup2">

                </div>
            </React.Fragment>
        )
    }
}

export default Register
