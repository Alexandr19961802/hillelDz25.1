import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductImage from './ProductImage';
import Stars from './Stars';
import { addToCart } from '../store/store';
export default function ProductCard({product}){
  const dispatch=useDispatch();
  return <article className="card">
    <Link to={`/product/${product.id}`}><ProductImage product={product}/></Link>
    <Link className="card-title" to={`/product/${product.id}`}>{product.title}</Link>
    <Stars value={product.rating}/>
    <div className="price"><b>${product.price}</b>{product.oldPrice>0&&<del>${product.oldPrice}</del>}{product.discount&&<span>{product.discount}</span>}</div>
    <button className="small-btn" onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
  </article>
}
