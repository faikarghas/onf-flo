import Head from 'next/head';
import '../sass/main.scss';
import NavigationTnC from '../components/NavigationTnC'

const image = {
  backgroundImage: "url('/static/headerImg.jpg')"
}

const TnC = (props) => {
  return (
    <div className="box-header-tnc" name="header" style={image} >
            <Head>
                <title>FLO</title>
            </Head>
            <NavigationTnC/>
            {props.children}
    </div>
  )
}

export default TnC
