import Nav from '../components/Nav';
import Header from '../components/Header';


const Layout = ({children}) => {
  return (
  <div className={'page bg-site text-white bg-cover bg-no-repeat font-sora relative'}>
    <Nav/>
    <Header />
    {children}
  </div>
  )
}

export default Layout;
