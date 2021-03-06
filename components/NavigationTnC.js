import {Component} from 'react';
import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import flowhite from '../static/flo/flologowhite.png';
import Term from '../components/Termlink'
import Link from 'next/link'

import '../sass/main.scss';


class header2 extends Component{

    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg section-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={flowhite} />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse section-navbar--link" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link href="/#about">
                                        <span className="nav-link" >Produk</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/#register">
                                        <span className="nav-link" >Cara Registrasi</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/#faq">
                                        <span className="nav-link" >FAQ</span>
                                    </Link>
                                </li>
                                <li>
                                    <Term />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
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
                        span{
                            font-family: Gotham-Medium;
                        }
                    `}
                </style>
            </div>
        )
    }

}


export default header2