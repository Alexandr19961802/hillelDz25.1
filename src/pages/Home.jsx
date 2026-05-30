import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { latestProducts, topProducts } from '../data/products';
import heroImg from '../assets/hero/hero.jpg';
import casualImg from '../assets/styles/casual.png';
import formalImg from '../assets/styles/formal.png';
import partyImg from '../assets/styles/party.png';
import gymImg from '../assets/styles/gym.png';

export default function Home() {
    const styles = [['Casual', casualImg], ['Formal', formalImg], ['Party', partyImg], ['Gym', gymImg]];
    return <main>
        <section className="hero"><div className="wrap hero-inner"><div><h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1><p>Browse through our diverse range of meticulously crafted garments.</p><Link to="/shop" className="black-btn">Shop Now</Link><div className="stats"><b>200+<span>International Brands</span></b><b>2,000+<span>High-Quality Products</span></b><b>30,000+<span>Happy Customers</span></b></div></div><div className="hero-art"><img src={heroImg} alt="Fashion models" /><span>✦</span><em>✦</em></div></div></section>
        <div className="brands"><b>VERSACE</b><b>ZARA</b><b>GUCCI</b><b>PRADA</b><b>Calvin Klein</b></div>
        <section className="wrap section"><h2>NEW ARRIVALS</h2><ProductGrid items={latestProducts.slice(0, 4)} /><Link className="view" to="/shop">View All</Link></section>
        <section className="wrap section"><h2>TOP SELLING</h2><ProductGrid items={topProducts} /><Link className="view" to="/shop">View All</Link></section>
        <section className="wrap dress"><h2>BROWSE BY DRESS STYLE</h2><div>{styles.map(([name, img]) => <Link key={name} to={`/shop?dress=${name}`}><strong>{name}</strong><img src={img} alt={name} /></Link>)}</div></section>
        <section className="wrap reviews"><h2>OUR HAPPY CUSTOMERS</h2><div><article>★★★★★<h3>Sarah M.</h3><p>Great quality and fast delivery.</p></article><article>★★★★★<h3>Alex K.</h3><p>The design looks exactly like modern shops.</p></article><article>★★★★★<h3>James L.</h3><p>Filters and cart work perfectly.</p></article></div></section>
    </main>
}
