// image import

import carlogo from '../static/artwork.png'
import floSmallLogo from '../static/flo/floblack.png'
import touchHand from '../static/hand.png'
import cross from '../static/cross.png'
import money from '../static/money.png'
import card from '../static/card.png'


class About extends React.Component {

    state = {
        trans   : 0,
    }
    componentDidMount(){
        window.addEventListener('scroll', _.throttle(this.handleScroll));
    }
    handleScroll = ()=> {
        let valueScroll = window.scrollY

        if(valueScroll){
            this.setState({
                trans : valueScroll*2 / 7,
            })
        }

    }



    render(){
        const {trans} = this.state
        return (
            <div className="section_about" name="about" id="about">
                <div className="container">
                    <div className="section_about--det">
                        <img src={floSmallLogo}/>
                    </div>
                    <div className="section_about--desc">
                        <h4>FLO adalah solusi pembayaran jalan tol berbasis teknologi stiker RFID <br/>
                        yang terkoneksi dengan aplikasi FLO di smartphone Anda.
                        </h4>
                    </div>
                    <div className="section_about--why">
                        <div className="col-3 col-md-2 col-lg-2">
                            <img src={touchHand} />
                            <h6 className="text-bold">Mudah digunakan</h6>
                            <p className="text-white">Hanya perlu melakukan sinkronasi stiker RFID dengan aplikasi di smartphone</p>
                        </div>
                        <div className="col-3 col-md-2 col-lg-2 borderThis">
                            <img src={cross} />
                            <h6 className="text-bold">Tanpa Perlu Berhenti</h6>
                            <p className="text-white">Hanya perlu melakukan sinkronasi stiker RFID dengan aplikasi di smartphone</p>
                        </div>
                        <div className="col-3 col-md-2 col-lg-2 mon">
                            <img src={money} />
                            <h6 className="text-bold">Top Up Darimana Saja</h6>
                            <p className="text-white">Hanya perlu melakukan sinkronasi stiker RFID dengan aplikasi di smartphone</p>
                        </div>
                    </div>
                    <div className="section_about--rfid">
                        <img src={card} style={{WebkitTransform:`translate(-50%,${-trans}px)`,msTransform:`translate(-50%,${-trans}px)`,transform:`translate(-50%,${-trans}px)`}}/>
                    </div>
                    <div className="section_about--img">
                        <img src={carlogo} />
                    </div>
                </div>
            </div>
          )
    }
}

export default About
