import Link from 'next/link'

import flopur from '../static/flo/flologopurple.png'
import googleplay from '../static/flo/playstore.png'
import appstore from '../static/flo/appstore.png'
import pinggir from '../static/pinggiranjln.png'
import tlpn from '../static/tlpn.png'
import msg from '../static/msg.png'
import home from '../static/home.png'

const Whatflo = () => {
  return (
    <div className="section_whatflo">
        <div className="container">
            <div className="section_whatflo-abs">
                <img src={pinggir}/>
            </div>
            <div className="row">
                <div className="section_whatflo-img">
                    <img src={flopur}/>
                </div>
            </div>
            <div className="row">
                <div className="col-4 section_whatflo-info">
                    <h6>PT. JASAMARGA TOLLROAD OPERATOR</h6>
                    <p>Plaza Tol Taman Mini Indonesia Indah. Jakarta</p>
                    <p>Tel (62-21) 841 3526/3630</p>
                    <p>Fax : (62-21) 840 1533, 841 3540</p>
                    <div className="unduh">
                        <h6>UNDUH APLIKASI</h6>
                        <ul>
                            <li className="googleplay"><a href="https://play.google.com/store?hl=en" target="_blank"><img src={googleplay}/></a></li>
                            <li className="appstore"><a href="https://itunes.apple.com/us/genre/ios/id36?mt=8" target="_blank"><img src={appstore}/></a></li>
                        </ul>
                    </div>

                </div>
                <div className="col-4 section_whatflo-what">
                    <h6>APA ITU FLO?</h6>
                    <p>
                        FLO adalah solusi pembayaran tol berbasis server dan teknologi RFID di Indonesia. Dengan aplikasi FLO, pengguna jalan tol tidak perlu menghentikan kendaraannya saat ingin melakukan transaksi pembayaran jalan tol di gerbang tol. Untuk menggunakan FLO, pengguna jalan tol hanya perlu mengunduh aplikasi FLO dan melakukan sinkronisasi dengan stiker RFID yang ditempatkan di bagian depan kendaraannya
                    </p>
                </div>
                <div className="col-4 section_whatflo-contact">
                    <h6>KONTAK</h6>
                    <ul>
                        <li><img src={tlpn}/> </li>
                        <li><img src={msg}/> </li>
                        <li><img src={home}/> </li>
                        <br/>
                        <li>
                            <Link href="/term"><button className="btn">T&C</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whatflo
