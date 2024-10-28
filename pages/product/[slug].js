import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import client from '../../src/components/ApolloClient';
import AddToCartButton from '../../src/components/cart/AddToCartButton';
import {PRODUCT_BY_SLUG_QUERY, PRODUCT_SLUGS} from '../../src/queries/product-by-slug';
import { isEmpty } from 'lodash';
import Accordion from "../../src/components/Accordion";
import GalleryCarousel from "../../src/components/single-product/gallery-carousel";
import Image from 'next/image'
import Star from "../../public/star.png"
import Head from "next/head"
export default function Product(props) {
	const { product } = props;
  


// If the page is not yet generated, this will be displayed  price(format: RAW)   regularPrice(format: RAW)  salePrice(format: RAW)
      
    






const ress  =  <table className="mt-2 w-full">
<tbody>
{product && product.attributes && product.attributes.nodes && product.attributes.nodes.length > 0 ? (
  product.attributes.nodes.map((attribute, index) => (
    <tr key={index}>
      <td className={`py-2 px-4 bg-gray-200`}>{attribute.name}</td>
      <td className="py-2 px-4">{attribute.options[0]}</td>
    </tr>
  ))
) : null}
</tbody>
</table>



 // initially until getStaticProps() finishes running

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

	return (
        <Layout>
            	<Head>
      
	  <title>{product.seo.title}</title>
	  <meta name="description" content={product.seo.metaDesc}/>
	 
	  <meta name="robots" content="index,follow" />
	</Head>
        { product ? (
            <div className="single-product container mx-auto my-32  xl:px-0">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="product-images relative">
                  
                        { !isEmpty( product?.galleryImages?.nodes ) ? (
                            <GalleryCarousel gallery={product?.galleryImages?.nodes}/>
                        ) : !isEmpty( product.image ) ? (
                            <img
                                src={ product?.image?.sourceUrl }
                                alt="Product Image"
                                width="100%"
                                height="auto"
                                srcSet={ product?.image?.srcSet }
                            />
                        ) : null }
                    </div>
                    <div className="product-info px-4 mt-10 lg:mt-0">
                        <h4 className="products-main-title text-2xl uppercase">{ product.name }</h4>
                        
               
                   
                        {product?.salePrice   ?  <div className='block mt-4'>  <strike className=" text-red-200 text-2xl ">{product?.regularPrice}<span ></span></strike><span className='ml-3 text-2xl bg-white rounded-full px-6 py-1 text-gray-500'>{product?.price}  </span></div> :   <div className=" text-2xl">{product?.price }<span className='ml-2'></span></div>}
                       {/* <Price salesPrice={product?.price } regularPrice={product?.regularPrice}/>*/}
                       <div className="mt-3 mb-10">
                        <AddToCartButton className="mt-3 "    product={ product }/>
                        <div className='pt-4'>
                     <Image   height={100} width={100} className="rounded-lg" objectPosition="center center"  objectFit={'cover'} src={Star}  /> </div>
                        </div>
                        <div
className="singl_product_description mb-5 mt-3 "
                            dangerouslySetInnerHTML={ {
                                __html: product.shortDescription,
                            } }
                        
                        />
            <div class="border border-gray-200"></div>
                        <div className='mt-3'>
                     <span>SKU:</span>   <span className='text-gray-400   '>{product.sku}</span>
                  
                </div>
                    </div>
                </div>

            </div>
        ) : (
            ''
        ) }
        <Accordion dess={ress} description={product.description}/>
    </Layout>
	);
};


export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query({
        query: PRODUCT_BY_SLUG_QUERY,
        variables: { slug }
    })

    return {
        props: {
            product: data?.product || {},
        },
        revalidate: 1
    };
}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: PRODUCT_SLUGS
    })

    const pathsData = []

    data?.products?.nodes && data?.products?.nodes.map((product) => {
        if (!isEmpty(product?.slug)) {
            pathsData.push({ params: { slug: product?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}