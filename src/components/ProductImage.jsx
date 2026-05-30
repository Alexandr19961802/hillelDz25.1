export default function ProductImage({product, large=false}){
  return <div className={large?'product-visual large':'product-visual'}>
    <img src={product.image} alt={product.title} />
  </div>
}
