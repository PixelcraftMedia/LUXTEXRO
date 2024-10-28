import Link from 'next/link';
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "../image";
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../constants/urls";

const Post = ( props ) => {
	const { post } = props;

	return (
		


					
				  <div className="inline-block px-3 py-3">
					<div
					  className=" rounded-lg shadow-md bg-white hover:shadow-xl "
					>
						<div className="shadow_post relative">
<Link href={ `/post/${ post?.id }`}  className="h-full">
		<div>
			<Image
				className="object-cover bg-gray-100 "
				width="500"
				height="500"
				loading="lazy"
				sourceUrl={post?.featuredImage?.node.sourceUrl }
			/>
	</div>
	</Link>
	</div>
	<div className="product-info pb-8">
		<h3 className="product-title mt-3 uppercase font-medium text-gray-800 p-3">
		{ post.title ? post.title : '' }
		</h3>
		<span className="px-3 py-2 text-white bg-gradient-to-r from-blue ...">{post.date}</span>
		{/*	<span className="block px-3 pb-8 pt-3 text-gray-500" dangerouslySetInnerHTML={ {
									__html: post.excerpt
								} }></span>*/}
	
		</div>


					</div>
				  
				  </div>
				 
		
			);
		};
		
{/*		<div classNameName="product mb-5 text-center">


	<Link href={ `/post/${ post?.id }`} >
		<a>
			<Image
				classNameName="object-cover bg-gray-100"
				width="500"
				height="500"
				loading="lazy"
				sourceUrl={post?.featuredImage?.node.sourceUrl }
			/>
		</a>
	</Link>
	<div classNameName="product-info">
		<h3 classNameName="product-title mt-3 font-medium text-gray-800">
		{ post.title ? post.title : '' }
		</h3>
	<span classNameName="overflow" dangerouslySetInnerHTML={ {
									__html: post.excerpt,
								} }></span>
</div>
</div>*/}

export default Post;