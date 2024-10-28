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








				<div className="products container mx-auto mt-20  ">
				<h2 className="products-main-title main-title mb-5 text-5xl  lg:text-6xl text-center  font-bold">Приэднуйтеся до нашої Viber групи для ексклюзивних пропозицій та оновлень! </h2>
				
				<div className="flex justify-center items-center flex-col lg:flex-row">
					<div className="w-full lg:w-6/12 m-3  relative ">
					
						<p className="text-justify mb-3"><strong> Шановні любителі затишку та комфорту! </strong>
						Запрошуємо вас приєднатися до нашої Viber групи, де ви отримуватимете першими інформацію про нові колекції постільної білизни та текстилю, а також спеціальні акційні пропозиції! 
						
						
						Не пропустіть можливість бути в курсі всіх наших пропозицій та насолоджуватися комфортом разом з нами! </p>
							
						<div><strong>	Приєднуйтеся за посиланям нижче:</strong></div>
							<a href=" https://invite.viber.com/?g=Jzq36PUtHFBHc7yo6PwO9LwZE1xOid_3"><button className="button  text-white px-5 py-5 mt-10 rounded-full w-full ">Приєднатися <strong>Viber</strong></button></a>
					</div>
					<div onClick={handleDownload} className="w-full lg:w-6/12 m-3  relative "><Image    alt="viber -luxtex"   src={Telegram}  />
						
					</div>
				</div>
			
			
				
			
		
			</div>
				{/*Prodduts*/ }
				<div className="mb-10">
					<h1 className="text-5xl  lg:text-6xl font-bold mb-10 leading-normal">Постільна білизна від виробника LUXTEX</h1>
					<div className="text-justify">
					<p>Якість сну напряму впливає на нашу якість життя, а постільна білизна від виробника LUXTEX може допомогти покращити якість вашого сну, так як ми являємося експертами в нашій галузі понад 20 років, ми відшиваємо продукцію тільки з власних тканин тому відповідаємо за якість. Наші комплекти постільної білизни виготовлені з високоякісних матеріалів та з увагою до деталей, що дозволяє нам створювати товари найвищої якості. Ми пропонуємо різноманіття дизайнів та кольорів, щоб кожен міг знайти комплект, який підходить саме йому.</p>
				<p>Окрім естетичної складової, постільна білизна від виробника LUXTEX також має високі показники зносостійкості та зберігання форми після прання. Наша білизна може забезпечити комфортну температуру в ліжку протягом всієї ночі, тому що ми використовуємо тканини з відповідною плотністю, які регулюють теплообмін.</p>
				</div>
				<h2 className="text-4xl  lg:text-5xl font-bold mb-10 mt-8">Розміри комплектів постільної білизни - підбір підковдри, наволочки та простирадла на резинці</h2>
				<div className="text-justify">
				 <p>
		  <strong> Постільна білизна </strong> яку пропонує компанія LUXTEX виготовлена  в різних розмірах , що дає змогу підібрати потрібний комплект відповідного розміру для вашого ліжка : <strong>півтора, двоспальний, євро та сімейний.</strong> Нижче показана таблиця розмірів - де ви можете підібрати не тільки розмір постільної білизни, а й відповідні розміри для - підодіяльника, наволочки, та простені на резинці за бажанням. Дана таблиця опублікована на сторінці кожного товару для зручності користування сайтом 
	  </p></div> 
				<h2 className="text-4xl  lg:text-5xl font-bold mb-10 mt-8">Таблиця розмірів</h2>
				
    <table className="size-full text-center border-4 border-gray-900" style={{ height: '171px', width: '100%' }} >
      <thead >
        <tr>
          <th className=" border border-gray-400 text-pers lg:text-base">розмір</th>
          <th className="border border-gray-400 text-pers lg:text-base">підодіяльник</th>
          <th className="border border-gray-400 text-pers lg:text-base">простирадло</th>
          <th className="border border-gray-400 text-pers lg:text-base">наволочка</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td className=" border border-gray-400 text-pers lg:text-base">полуторний</td>
          <td className=" border border-gray-400 text-pers lg:text-base">150*210</td>
          <td className=" border border-gray-400 text-pers lg:text-base">150*210</td>
          <td className=" border border-gray-400 text-pers lg:text-base">70*70/50*70(1шт.)</td>
        </tr>
        <tr>
          <td className=" border border-gray-400 text-pers lg:text-base">двоспальний</td>
          <td className=" border border-gray-400 text-pers lg:text-base">180*210</td>
          <td className=" border border-gray-400 text-pers lg:text-base">200*220</td>
          <td className=" border border-gray-400 text-pers lg:text-base">70*70/50*70(2шт.)</td>
        </tr>
        <tr>
          <td className=" border border-gray-400 text-pers lg:text-base">євростандарт</td>
          <td className=" border border-gray-400 text-pers lg:text-base">200*220</td>
          <td className=" border border-gray-400 text-pers lg:text-base">220*220</td>
          <td className=" border border-gray-400 text-pers lg:text-base">70*70/50*70(2шт.)</td>
        </tr>
        <tr>
          <td className=" border border-gray-400 text-pers lg:text-base">сімейний</td>
          <td className=" border border-gray-400 text-pers lg:text-base">150*210(2шт.)</td>
          <td className=" border border-gray-400 text-pers lg:text-base">220*220</td>
          <td className=" border border-gray-400 text-pers lg:text-base">70*70/50*70(2шт.)</td>
        </tr>
      </tbody>
    </table>
	<h2 className="text-4xl  lg:text-5xl font-bold mb-10 mt-8">Тканини які використовує виробник постільної білизни LUXTEX</h2>
	<div className="text-justify">
	<p>
		
		Наша постільна білизна виготовлена з різних тканин, таких як <a href="https://www.lux-tex.com.ua/product-category/postilna-bilyzna-ranfors/">ранфорс</a>, 
				  <a href="https://www.lux-tex.com.ua/product-category/postilna-bilyzna-byazi/">бязь</a> та   <a href="https://www.lux-tex.com.ua/product-category/postilna-bilyzna-strayp-satyn/"> страйп сатин</a>.    
		
		<br/>
		<strong>Ранфорс </strong> - це гладка тканина з тканинного переплетення з використанням відносно тонкої нитки. Вона міцна, зносостійка та добре тримає колір після прання.
		<br/>
		<strong>Бязь</strong> - це м'яка, гладка та приємна на дотик тканина з мереживним переплетенням. Вона добре пропускає повітря, тому є хорошим вибором для людей з чутливою шкірою.
		<br/>
		<strong>Страйп сатин</strong> - це тканина з глянцевим візерунком, який надає їй елегантний вигляд. Вона виготовляється з використанням плотного переплетення, яке дає їй високу міцність та зносостійкість.
		
		
			  </p>
			  
			  <p>
				<br/>
				<strong>  Ми завжди на звязку з Вами</strong> - наші оператори нададуть Вам консультацію та допоможуть  обрати потрібну білизну, а також додатково нададуть фото та відео матеріали, щоб Ви були впевнені, в тому, що купуєте.
			  </p>
			  <p>
		Купуючи постільну білизну від Українського  виробника LUXTEX, ви можете бути впевнені, що отримуєте товар високої якості, який зробить ваш сон більш комфортним та корисним для здоров'я. Зробіть вибір на користь якості та комфорту, оберіть постільну білизну від нашого виробника.
		  </p>
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
