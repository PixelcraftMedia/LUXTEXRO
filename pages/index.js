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
import Telegram from "../public/telegram.png"
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
	const questionsAnswers = [
	
        {
          id: 2,
            title: "CHANTARELLE",
            description: "Професійна і домашня косметика, косметологічні апарати (Франція, Польща)",
            linkarticle:"/chantarelle"
      
        },
        {
          id: 3,
            title: "ARKANA",
            description: "Професійна і домашня косметика (Польща)",
            linkarticle:"/arkana"
        },
        {
          id: 4,
            title: "NOREL Dr. Wilsz",
            description: "Професійна і домашня косметика (Польща)",
            linkarticle:"/norel"
           
        },
		{
			id: 2,
			  title: "MCCM",
			  description: "Одна з провідних компаній в індустрії краси",
			  linkarticle:"/mccm"
		
		  },
		  {
			id: 3,
			  title: "DERMAOXY",
			  description: "апарат кисневої Безін'єкційної мезотерапії (Данія)",
			  linkarticle:"/dermaoxy"
		  },
		  {
			id: 4,
			  title: "SITTARA",
			  description: "Професійні косметологічні апарати",
			  linkarticle:"/posts/chantarelle"
			 
		  }
	]
	
	const { products,  heroCarousel, posts, postsCategory,featuredproducts,news ,ret} = props || {};

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
<title>Lenjerie de pat de calitate, Premium și de lux - Descoperă cea mai bună lenjerie de pat</title>

	</Head>

			<Layout>
	<div className="main ">
				{/*Hero Carousel*/}
				<HeroCarousel heroCarousel={heroCarousel}/>
				
				
			
				{/*<a href="myfile.pdf"  download>Download</a>*/}
			
				{/*Categories
				<div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
					<h2 className="mai-title text-3xl text-center mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
					<ParentCategoriesBlock productCategories={ productCategories }/>
</div>*/ }
			
			
			
			<div className="products container mx-auto px-4 my-10  ">
					<h2 className="products-main-title main-title mb-10  text-center text-5xl  lg:text-6xl font-bold">Категорії</h2>
				<div className="products container mx-auto   ">

				
				
				<Swiper
      spaceBetween={30}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide ><Image   height={900} width={900} className="rounded-lg" objectPosition="center center" fill={true} objectFit={'cover'} src={categoryStripe}  /> <h3 className="absolute top-2 left-2 text-white bg-black px-2 py-1 rounded-lg">З РАНФОРСУ</h3></SwiperSlide>
      <SwiperSlide ><Image   height={900} width={900} className="rounded-lg" objectPosition="center center" fill={true} objectFit={'cover'} src={categoryStripe}  /> <h3 className="absolute top-2 left-2 text-white bg-black px-2 py-1 rounded-lg">З РАНФОРСУ</h3></SwiperSlide>
	  <SwiperSlide ><Image   height={900} width={900} className="rounded-lg" objectPosition="center center" fill={true} objectFit={'cover'} src={categoryStripe}  /> <h3 className="absolute top-2 left-2 text-white bg-black px-2 py-1 rounded-lg">З РАНФОРСУ</h3></SwiperSlide>
	  <SwiperSlide ><Image   height={900} width={900} className="rounded-lg" objectPosition="center center" fill={true} objectFit={'cover'} src={categoryStripe}  /> <h3 className="absolute top-2 left-2 text-white bg-black px-2 py-1 rounded-lg">З РАНФОРСУ</h3></SwiperSlide>
   
    </Swiper>
			
			
				
			
		
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
				<div className="products container mx-auto my-10  ">
					<h2 className="products-main-title main-title mb-10  text-center text-5xl  lg:text-6xl font-bold">Новинки</h2>
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
					{ featuredproducts.length ? (
							featuredproducts.map( product => <ProductHome key={ product.id } isLoggedIn={isLoggedIn} product={ product }/> )
						) : '' }
					</div>
				</div>






				<div className="products container mx-auto mt-20  ">
				<h2 className="products-main-title main-title mb-5 text-5xl  lg:text-6xl text-center  font-bold">Dragi clienți Luxtex!</h2>
				
				<div className="flex justify-center items-center flex-col lg:flex-row">
					<div className="w-full lg:w-6/12 m-3  relative ">
					
						<p className="text-justify mb-3">Doriți să fiți la curent cu toate evenimentele din compania noastră? Doriți să primiți informații despre produsele noi, promoții și reduceri în 
							fiecare lună? Atunci alăturați-vă grupului nostru de Telegram prin intermediul codului QR!</p>
							<p className="mb-3 text-justify">Dacă întâmpinați probleme în conectarea sau scanarea codului QR, vă rugăm să contactați operatorul nostru în acest chat. Vă vom ajuta cu plăcere să vă alăturați grupului nostru de Telegram.</p>
							<p className="">Vă mulțumim că ați ales Luxtex!</p>
					</div>
					<div onClick={handleDownload} className="w-full lg:w-6/12 m-3  relative "><Image       src={Telegram}  />
						
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
				<h2 className="text-4xl  lg:text-5xl font-bold mb-10 mt-8">Розміри комплектів постільної білизни - підбір підодіяльника, наволочки та простені на резинці</h2>
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
			products: data?.products?.nodes ? data.products.nodes : [],
			featuredproducts: data?.featuredproducts?.nodes ? data.featuredproducts.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};
