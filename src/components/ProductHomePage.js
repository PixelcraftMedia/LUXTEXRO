import Link from 'next/link';
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "../image";
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../constants/urls";

const Product = ( props ) => {
	const { product,isLoggedIn } = props;
	const regular = product?.regularPrice/2;
	const re = product?.regularPrice ;
	const regula = +re + +regular;
	const login = product?.regularPrice;
	const rar = isLoggedIn ? login :  regula  ;  
const par = Number(rar);
const  procent =  (product?.regularPrice - product?.price) /  product?.regularPrice * 100;

const amount = par - product?.price;
const interest = par/100;
const result = amount/interest;



// @TODO CHANGE regularPrice by registe users.



	return (
		// @TODO Need to hndle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
			<div className="product mb-5   relative bg-white p-2 rounded-sm">



				<Link href={ `/product/${ product?.slug }`} >
				
						<Image
							className="object-cover bg-gray-100"
							width="500"
							height="500"
							priority={true}
							
						  
							sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
							sourceUrl={ product?.image?.sourceUrl ?? '' }
							defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
							altText={product.name}
						/>
					
					
				</Link>
				<div className="mt-3 text-center pl-2 md:pl-3 font-semibold text-text_title text-lg uppercase">{product.name}</div>
				<div className="product-info text-center pl-2 md:pl-3">
					
				
				 {product?.salePrice   ?  <div className='mt-3 flex flex-col'>  <strike className=" text-red-200 text-xl ">{product?.regularPrice}<span ></span></strike><span className=' text-2xl bg-white rounded-full   text-text_title'>{product?.price}  </span></div> :   <div className=" text-2xl text-text_title">{product?.price }<span className='ml-2'></span></div>}
				
					<AddToCartButton product={ product } />
				</div>

			</div>
		) : (
			''
		)
	);
};

export default Product;