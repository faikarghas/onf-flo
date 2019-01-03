import Head from 'next/head';
import Navigation from './Navigation';
// css
import '../sass/main.scss';


const Layout = (props) => {
    return (
        <div className="box-header" name="header">
            <Head>
                <title>FLO</title>
            </Head>
            <Navigation />
            {props.children}
        </div>
    )         
}

export default Layout;