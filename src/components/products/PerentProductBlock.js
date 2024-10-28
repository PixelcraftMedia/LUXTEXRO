import Link from 'next/link';
import Image from "../../image";
import {DEFAULT_PRODUCT_IMG_URL} from "../../constants/urls";
import AddToCartButton from '../cart/AddToCartButton';
import Price from "../single-product/price";


const Product = ( props ) => {
	const { product } = props;

	return (
		// @TODO Need to handle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
			<div className="product mb-5 text-center hover:shadow-xl relative">
 
 <div className="bg-blue rounded absolute right-2 top-2 z-10 text-white p-2">NEW</div>
				<Link href={ `/product/${ product?.slug }`} >
					<div>
						<Image
							className="object-cover bg-gray-100"
							width="500"
							height="500"
							loading="lazy"
							sourceUrl={ product?.image?.sourceUrl ?? '' }
                            defaultImgUrl={DEFAULT_PRODUCT_IMG_URL}
							altText={product?.image?.altText ?? product?.slug}
						/>
					</div>
				</Link>
				<div className="product-info p-2 md:p-5">
					<h3 className="product-title mt-3 font-medium text-gray-800 overflow-hidden">
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
