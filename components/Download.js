import flophone from '../static/flo/hppurple.png'
import googleplay from '../static/flo/playstore.png'
import appstore from '../static/flo/appstore.png'


class Register extends React.Component{
    state = {
        trans : 0,
        trans2 : 0
    }
    componentDidMount(){
        window.addEventListener('scroll', _.throttle(this.handleScroll));
    }
    handleScroll = ()=> {
        let valueScroll = window.scrollY

        if(valueScroll){
            this.setState({
                trans : valueScroll*2 / 14,
                trans2: valueScroll*2 / 18
            })
        }

    }


    render(){
        const {trans,trans2} = this.state
        return (
            <div className="section_download">
                <div className="container hidden-down">
                    <div className="row">
                        <div className="col-6 col-lg-6 col-md-6 section_download--desc">
                            <div className="section_download--desc-pos" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}>
                                <h4>KONTROL DALAM SATU APLIKASI</h4>
                                <p>Download aplikasi FLO untuk mengecek saldo,<br/> registrasi stiker RFID, cara top-up dan lain-lain</p>
                                <ul>
                                    <li className="googleplay"><a href="https://play.google.com/store?hl=en" target="_blank"><img src={googleplay}/></a></li>
                                    <li className="appstore"><a href="https://itunes.apple.com/us/genre/ios/id36?mt=8" target="_blank"><img src={appstore}/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-lg-6 col-md-6 section_download--img">
                            <img src={flophone} style={{transform:`translate(0,${-trans2}px)`}}/>
                        </div>
                    </div>
                </div>
                <div className="container hidden-up">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 section_download--img">
                            <img src={flophone} style={{transform:`translate(0,${-trans2}px)`}}/>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 section_download--desc">
                            <div className="section_download--desc-pos" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}>
                                <h4>KONTROL DALAM SATU APLIKASI</h4>
                                <p>Download aplikasi FLO untuk mengecek saldo,<br/> registrasi stiker RFID, cara top-up dan lain-lain</p>
                                <ul>
                                    <li className="googleplay"><a href="https://play.google.com/store?hl=en" target="_blank"><img src={googleplay}/></a></li>
                                    <li className="appstore"><a href="https://itunes.apple.com/us/genre/ios/id36?mt=8" target="_blank"><img src={appstore}/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )
    }
}

export default Register
