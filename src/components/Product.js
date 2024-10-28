import Link from 'next/link';
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "../image";
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../constants/urls";

const Product = ( props ) => {
	const { product } = props;


	return (
		// @TODO Need to handle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
			<div className="product mb-5  hover:shadow">


				<Link href={ `/product/${ product?.slug }`} >
					<div>
						<Image
							className="object-cover bg-gray-100"
							width="500"
							height="500"
							loading="lazy"
							sourceUrl={ product?.image?.sourceUrl ?? '' }
							defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
							altText={product?.image?.altText ?? product?.slug}
						/>
					</div>
				</Link>
				<div className="text-center text-white  bg-black opacity-30">{product.sku}</div>
				<div className="product-info text-center p-2 md:p-5">
					<h3 className="product-title mt-3 font-medium text-gray-800 overflow-hidden ">
						{ product.name ? product.name : '' }
					</h3>
					
					
					<div className="product-description text-sm text-gray-700 " dangerouslySetInnerHTML={{ __html: (product?.description)}}/>
					<Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>
					<AddToCartButton product={ product }/>
				</div>

			</div>
		) : (
			''
		)
	);
};

export default Product;
