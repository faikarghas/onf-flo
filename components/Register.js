import regphone from '../static/flo/hpawan.png'
import howart from '../static/howart.png'

class Register extends React.Component {
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
                trans : valueScroll*2 / 14,
            })
        }

    }
    componentWillUnmount(){
        // window.removeEventListener('scroll', this.handleScroll);
    }
    render(){
        const {trans} = this.state
        return (
            <div className="section_registrasi" name="register" id="register">
                <div className="container">
                    <div className="section_registrasi--title">
                      <h1>Cara Registrasi Flo</h1>
                    </div>
                    <div className="section_registrasi--desc row">
                        <div className="col-12 reg-img col-lg-6 col-md-6">
                            <img src={regphone} style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}/>
                        </div>
                        <div className="col-12 reg-how col-lg-6 col-md-6">
                            <div className="border-reg"></div>
                            <ul>
                                <li>
                                    <h4><span>1</span>Datang ke mitra yang ditunjuk</h4>
                                    <p>klik disini untuk mengetahui lokasi pre-order FLO</p>
                                </li>
                                <li>
                                    <h4><span>2</span>Lakukan Pre-order dan Pilih Lokasi Pengambilan<br/> Stiker RFID</h4>
                                    <p>Setelah melakukan pre-order,<br/> tentukan lokasi dan tempat pemasangan stiker RFID</p>
                                </li>
                                <li>
                                    <h4><span>3</span>Bawa Kendaraan ke Lokasi Pemasangan RFID</h4>
                                    <p>Datang ke lokasi pemasangan stiker RFID sesuai dengan <br/> tanggal yang telah ditentukan</p>
                                </li>
                                <li>
                                    <h4><span>4</span>Pemasangan Stiker RFID</h4>
                                    <p>Tim teknisi FLO akan membantu proses pemasangan, sinkronisasi,<br/> dan uji stiker RFID</p>
                                </li>
                                <li>
                                    <h4><span>5</span>Aplikasi FLO-mu Siap Digunakan</h4>
                                    <p>Segera isi ulang dan aplikasi FLO siap digunakan</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="howart-img">
                    <img src={howart} />
                </div>
            </div>
          )
    }

}

export default Register
