import "node_modules/video-react/dist/video-react.css";
import { Player, ControlBar, BigPlayButton,ReplayControl,
  ForwardControl, CurrentTimeDisplay,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
} from 'video-react';

import flologo from '../static/flo/flologopurple.png'

class Video extends React.Component{
  state = {
    trans : 0
  }
  componentDidMount(){
      window.addEventListener('scroll', _.throttle(this.handleScroll));
  }
  handleScroll = ()=> {
      let valueScroll = window.scrollY

      if(valueScroll){
          this.setState({
              trans : valueScroll*2 / 14,
          })
      }

  }

  render(){
    const {trans} = this.state
    return (
      <div className="section_video">
          <div className="container">
              <div className="section_video--title">
                <h1>Tak Perlu Berhenti, Tak Harus Antri</h1>
              </div>

              <div className="section_video--det" style={{WebkitTransform:`translate(-50%,${-trans}px)`,msTransform:`translate(-50%,${-trans}px)`,transform:`translate(-50%,${-trans}px)`}}>
                <div className="card mb-3">
                <div className="card-header-n1">
                  <Player
                    fluid={false}
                    width='auto'
                    poster='../static/video-thumbnail.jpg'
                  >
                    <source src="../static/flo/videoflo.mp4" />

                    {/* <BigPlayButton position="center" /> */}

                    <ControlBar>
                      <CurrentTimeDisplay order={4.1} />
                      <TimeDivider order={4.2} />
                      <VolumeMenuButton enable />
                    </ControlBar>
                  </Player>

                  {/* <iframe width="100%" height="100%"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
                  </iframe>
                   */}
                  </div>
                  <div className="card-body row">
                    <div className="col-5 card-body--logo">
                      <img src={flologo}/>
                    </div>
                    <div className="col-7 card-body--desc">
                      <h5 className="card-title">SOLUSI PEMBAYARAN JALAN TOL<br/> TANPA BERHENTI</h5>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Video
