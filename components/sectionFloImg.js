import floimage from '../static/flo/flologomiring.png'
import floimage2 from '../static/flo/image/flologomiringImg.png'

import { ParallaxProvider,Parallax } from 'react-scroll-parallax';

class sectionFloImg extends React.Component {
  state = {
    trans : 0,
}
componentDidMount(){
    window.addEventListener('scroll', _.throttle(this.handleScroll));
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
      <div className="section_flo_image">
        <div className="container">
          <div className="section_flo_image--img for-desk">
                {/* <Parallax
                    className="custom-class"
                    offsetYMax={45}
                    offsetYMin={-45}
                    slowerScrollRate
                    tag="figure"
                > */}
                    {/* <img src={floimage} /> */}
                    <img src={floimage} style={{WebkitTransform:`translate(0,${trans}px)`,transform:`translate(0,${trans}px)`,msTransform:`translate(0,${trans}px)`}}/>
                {/* </Parallax> */}
          </div>
          <div className="section_flo_image--img for-mobile">
            {/* <Parallax
                    className="custom-class"
                    offsetYMax={-45}
                    offsetYMin={20}
                    slowerScrollRate
                    tag="figure"
                > */}
              {/* <img src={floimage2}/> */}

              <img src={floimage2} style={{WebkitTransform:`translate(0,${trans}px)`,transform:`translate(0,${trans}px)`,msTransform:`translate(0,${trans}px)`}}/>
            {/* </Parallax> */}
          </div>
        </div>
      </div>
    )
  }

}

export default sectionFloImg
