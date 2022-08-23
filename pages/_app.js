import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Header />
      <div className=' h-full min-h-screen'>
        <Component {...pageProps} />
      </div>
    </div>
  )
   
}

export default MyApp
