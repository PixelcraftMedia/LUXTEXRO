import Layout from "../src/components/Layout";
import ProductHome from "../src/components/ProductHomePage";
import SarchProps from "../src/components/search";
import Post from "../src/components/Post";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import ParentProductBlock from "../src/components/products/PerentProducts";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
import Accordion from "../src/components/Accordion";
import { AuthContextProvider } from '../src/components/login-function/auth-context';
import { ApolloProvider } from "@apollo/client";
import Login from "../src/components/login";
import SignUp from '../src/components/signup/SignUp'
import { useState } from 'react';
import { useAuth } from '../src/components/login-function/hooks';
import Head from "next/head"
import AliceCarousel from 'react-alice-carousel';
import Navigation from "../src/components/navigation-chantarelle";
import categoryStripe from "../public/pattern_chant.jpg"
import categoryRanfors from "../public/ranforse.jpg"
import categoryBiz from "../public/biz.jpg"
import categoryChildren from "../public/children.jpg"
import Telegram from "../public/vb.png"
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ParentCategoryBlock from "../src/components/category/category-block/ParentCategoryBlock";
import ParentTagBlock from "../src/components/category/category-block/ParentTagBlock";
export default function Home (props) {
	
	const { isLoggedIn } = useAuth();
	
	
	<SarchProps isLoggedIn={isLoggedIn}/>
	const imageUrl = Telegram;

	const handleDownload = () => {
	  const link = document.createElement('a');
	  link.href = imageUrl;
	  link.download = 'telegram.png';
	  document.body.appendChild(link);
	  link.click();
	  document.body.removeChild(link);
	};
	
	
	const { products,  heroCarousel, posts,productCategories,featuredproducts,productTags} = props || {};

	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items:4 },
	};

	
	const items = [
	
		
	];
	
	
	
	 

	return (
		<>
	<Head>
    <title>Постільна білизна від виробника LUXTEX</title>
	<meta name="description" content="Купуючи постільну білизну від виробника LUXTEX Ви отримаєтте гарантію якості!Відчуйте наші розкішні тканини!"/>
	<meta name="google-site-verification" content="LA_Al_18WMz2mdVTjsYF-niapRhXBYZuK3_sNMSzLK0" />
	</Head>

			<Layout productTags={productTags}>
	<div className="main ">
			
				
			
				{/*<a href="myfile.pdf"  download>Download</a>*/}
			
			
				    
			
			
			
			<div className="products container mx-auto px-4 my-10  ">
					<h2 className="products-main-title main-title mb-10  text-center text-5xl  lg:text-6xl font-bold">Категорії</h2>
				<div className="products container mx-auto hidden lg:block">

				
	
			{ productCategories.length ? (
							productCategories
							.filter(category => category.slug !== "par-landing")
							.filter(category => category.slug !== "uncategorized")
							.filter(category => category.slug !== "vitamine-minerale")
							.filter(category => category.slug !== "advertising-package")
							.filter(category => category.slug !== "offers")
							.filter(category => category.slug !== "biazi-pivtoraspalnyy")
							.filter(category => category.slug !== "strayp-satyn-dvospalnyy")
							.filter(category => category.slug !== "biazi-dvospalnyy")
							.filter(category => category.slug !== "slide1")
							.map( category => <SwiperSlide >	<ParentCategoryBlock category={ category }/></SwiperSlide> )
	  ) : '' }
  

			
	
			
		
			</div>
			<div className="products container mx-auto  block lg:hidden">
	{ productCategories.length ? (
							productCategories
							.filter(category => category.slug !== "par-landing")
							.filter(category => category.slug !== "uncategorized")
							.filter(category => category.slug !== "vitamine-minerale")
							.filter(category => category.slug !== "advertising-package")
							.filter(category => category.slug !== "offers")
							.filter(category => category.slug !== "biazi-pivtoraspalnyy")
							.filter(category => category.slug !== "strayp-satyn-dvospalnyy")
							.filter(category => category.slug !== "biazi-dvospalnyy")
							.filter(category => category.slug !== "slide1")
							.map( category => <SwiperSlide >	<ParentCategoryBlock  category={ category }/></SwiperSlide> )
	  ) : '' }
		</div>
					{/*Post
					<div className="products container  mx-auto my-32 px-4 ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">{postsCategory?.name}</span></h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
						{ posts.length ? (
							posts.map( post => <Post key={ post.id } post={ post }/> )
						) : '' }
					</div>
				</div>*/ }
					{/*Star*/ }
			
		
					
				{/*Products*/ }
	
<div className="container mx-auto my-10 flex flex-col lg:flex-row">
    <div className="w-full lg:w-96 lg:sticky lg:top-10 mb-10  lg:mr-8"> {/* Adjust the width and margin-right as needed */}
        {/* Content of the sidebar goes here */}
        <div className="animated-background p-4 lg:mr-4"> {/* Additional right margin inside the sidebar on large screens if needed */}
            <h3 className="font-bold text-2xl text-center lg:text-left mb-6 text-black">Обрати розмір постільної білизни</h3>
            {productTags.length ? (
				productTags
					.filter(tag => tag.slug !== "navolochky-5070")
					.filter(tag => tag.slug !== "navolochky-7070")
                .map(category => <ParentTagBlock category={category}/>)
            ) : ''}
        </div>
    </div>
    <div className="flex-grow">
	
	<h2 className="products-main-title main-title mb-10  text-center text-5xl  lg:text-6xl font-bold">Популярні товари</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {featuredproducts.length ? (
				
			featuredproducts.map(product => <ProductHome key={product.id} isLoggedIn={isLoggedIn} product={product}/>)
            ) : ''}
        </div>
    </div>
</div>








			
			
				

				
				</div>
				</div>
				
				
			</Layout>
			</>
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
		questionsAnswers:data?.category?.posts?.nodes ? data.category.posts.nodes : [],
			postsCategory: data?.category ? data.category : [],
			news: data?.news?.posts?.nodes ? data.news.posts.nodes : [],
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			productTags: data?.productTags?.nodes ? data.productTags.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			featuredproducts: data?.featuredproducts?.nodes ? data.featuredproducts.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};
