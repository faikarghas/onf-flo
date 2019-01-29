import {Component} from 'react';
import {withRouter} from 'next/router'

import HeaderLayout from '../components/HeaderLayout.js';
import Floimage from '../components/sectionFloImg';
import About from '../components/About';
import Video from '../components/Video';
import Register from '../components/Register';
import Download from '../components/Download';
import Topup from '../components/Topup';
import Whatflo from '../components/Whatflo';
import Faq from '../components/FAQ';
import HeadChild from '../components/HeadChild';

import '../sass/main.scss';
import $ from 'jquery';

import GaWrapper from '../lib/GAWarp';

import { ParallaxProvider,Parallax } from 'react-scroll-parallax';


class Index extends Component{

    render(){
        return(
            <ParallaxProvider>
            <div>
                <HeaderLayout title={'Home'}>
                    <HeadChild />
                </HeaderLayout>
                    <Floimage />
                    <About />
                    <Video />
                    <div style={{transformOrigin: 'center 0.5px 0px',left: '0px',position: 'absolute',height: '5px'}} className="border-section" id="comp-jg31wn5r"></div>
                    <Register />
                    <div style={{transformOrigin: 'center 0.5px 0px',left: '0px',position: 'absolute',height: '5px'}} className="border-section" id="comp-jg31wn5r"></div>
                    <Download />
                    <Topup />
                    <Whatflo />
                    <Faq />
            </div>
            </ParallaxProvider>
        )
    }
}


export default withRouter(Index)