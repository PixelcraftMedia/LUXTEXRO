import Layout from "../../src/components/Layout";
import client from "../../src/components/ApolloClient";
import Product from "../../src/components/ProductHomePage";
import {PRODUCT_BY_TAG_SLUG,PRODUCT_TAG_SLUGS} from "../../src/queries/product-by-category";
import {isEmpty} from "lodash";
import {useRouter} from "next/router";
import { useAuth } from '../../src/components/login-function/hooks';



	
export default function CategorySingle( props ) {
    const { isLoggedIn } = useAuth();
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const { TagName, products, TagDescription } = props;

    return (
        <Layout>
            <div className="product-categories-container container mx-auto my-32  xl:px-0">
                { TagName ? <h3 className="text-2xl mb-5 uppercase">{ TagName }</h3> : '' }
                { TagDescription ? <p className=" mb-5 ">{ TagDescription }</p> : '' }
                <div className="product-categories grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    { undefined !== products && products?.length ? (
                        products.map( product =>  <Product key={product?.id || product?.slug} isLoggedIn={isLoggedIn} product={ product } /> )
                    ) : ''}
                </div>
            </div>
        </Layout>
    )
};
export async function getStaticProps(context) {

    const {params: { slug}} = context

    const {data} = await client.query(({
        query: PRODUCT_BY_TAG_SLUG,
        variables: { slug }
    }));

    return {
        props: {
            TagDescription: data?.productTag?.description ?? '',
            TagName: data?.productTag?.name ?? '',
            products: data?.productTag?.products?.nodes ?? []
        },
        revalidate: 1
    }

}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: PRODUCT_TAG_SLUGS,
    })
 
    const pathsData = []

    data?.productTags?.nodes && data?.productTags?.nodes.map((productTag) => {
        if (!isEmpty(productTag?.slug)) {
            pathsData.push({ params: { slug: productTag?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}
