import headimg from '../static/flo/hpheader.png'
import flopur from '../static/flo/flologopurple.png'
import googleplay from '../static/flo/playstore.png'
import appstore from '../static/flo/appstore.png'

import _ from 'lodash'


class HeadChild extends React.Component {
    state = {
        trans : 0,
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = ()=> {
        let valueScroll = window.scrollY
        if(valueScroll){
            this.setState({
                trans : valueScroll / 7,
            })  
        }
        
    }
    
    render(){
        const {trans} = this.state
        
        return (
            <div className="section_headchild">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 section_headchild--1">
                            <img src={headimg} style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 section_headchild--2" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}>
                            <div className="flologo">
                                <img src={flopur} />
                            </div>
                            <h1>SOLUSI PEMBAYARAN</h1>
                            <h1>JALAN TOL</h1>
                            <h1>TANPA BERHENTI</h1>
                            <div className="download">
                                <h3>DOWNLOAD SEKARANG</h3>
                            </div>
                            <ul>
                                <li className="googleplay"><a href="https://play.google.com/store?hl=en" target="_blank"><img src={googleplay}/></a></li>
                                <li className="appstore"><a href="https://itunes.apple.com/us/genre/ios/id36?mt=8" target="_blank"><img src={appstore}/></a></li>
                            </ul>
                        </div>
                    </div>               
                </div>
                <style jsx global>{`
                        @font-face {
                        font-family: "Gotham-Medium";
                        src:
                            url('../static/fonts/Gotham-Medium.woff') format('woff'),
                            url('../static/fonts/Gotham-Medium.otf') format('otf'),
                            url('../static/fonts/Gotham-Medium.ttf') format('ttf')
                        }
                        @font-face {
                        font-family: "Gotham-Rounded-book";
                        src:
                            url('../static/fonts/GothamRounded-Book.woff') format('woff'),
                            url('../static/fonts/GothamRounded-Book.otf') format('otf'),
                            url('../static/fonts/gothamroundedbook.ttf') format('ttf')
                        }
                        h1{
                            font-family: Gotham-Rounded-book;
                        }
                    `}
                </style>
            </div>
          )
    }
  
}

export default HeadChild
