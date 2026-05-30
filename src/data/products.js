import p1 from '../assets/products/product1.png';
import p2 from '../assets/products/product2.png';
import p3 from '../assets/products/product3.png';
import p4 from '../assets/products/product4.png';
import p5 from '../assets/products/product5.png';
import p6 from '../assets/products/product6.png';
import p7 from '../assets/products/product7.png';
import p8 from '../assets/products/product8.png';

export const products = [
  {id:1,title:'Gradient Graphic T-shirt',price:145,oldPrice:242,discount:'-20%',rating:3.5,category:'T-shirts',color:'White',size:'Large',dress:'Casual',image:p1},
  {id:2,title:'Polo with Tipping Details',price:180,oldPrice:242,discount:'-20%',rating:4.5,category:'T-shirts',color:'Pink',size:'Small',dress:'Casual',image:p2},
  {id:3,title:'Black Striped T-shirt',price:120,oldPrice:150,discount:'-30%',rating:5.0,category:'T-shirts',color:'Black',size:'Medium',dress:'Casual',image:p3},
  {id:4,title:'Skinny Fit Jeans',price:240,oldPrice:260,discount:'-20%',rating:3.5,category:'Jeans',color:'Blue',size:'Large',dress:'Casual',image:p4},
  {id:5,title:'Checkered Shirt',price:180,oldPrice:0,discount:'',rating:4.5,category:'Shirts',color:'Red',size:'Medium',dress:'Formal',image:p5},
  {id:6,title:'Sleeve Striped T-shirt',price:130,oldPrice:160,discount:'-30%',rating:4.5,category:'T-shirts',color:'Orange',size:'Small',dress:'Party',image:p6},
  {id:7,title:'Vertical Striped Shirt',price:212,oldPrice:232,discount:'-20%',rating:5.0,category:'Shirts',color:'Green',size:'Large',dress:'Formal',image:p7},
  {id:8,title:'Courage Graphic T-shirt',price:145,oldPrice:0,discount:'',rating:4.0,category:'T-shirts',color:'Orange',size:'Medium',dress:'Gym',image:p8},
  {id:9,title:'Loose Fit Bermuda Shorts',price:80,oldPrice:0,discount:'',rating:3.0,category:'Shorts',color:'Blue',size:'Medium',dress:'Casual',image:p4}
];
export const latestProducts = products.slice().reverse();
export const topProducts = products.slice().sort((a,b)=>b.rating-a.rating).slice(0,4);
