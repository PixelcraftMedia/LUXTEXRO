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
    <title>Постільна білизна 100%-якість та гарантія LUXTEX Україна</title>
	<meta name="description" content="Постільна білизна з гарантією якості від LUXTEX Україна!"/>
	<meta name="google-site-verification" content="LA_Al_18WMz2mdVTjsYF-niapRhXBYZuK3_sNMSzLK0" />
	</Head>

			<Layout productTags={productTags}>
	<div className="main ">
				{/*Hero Carousel*/}
				<HeroCarousel heroCarousel={heroCarousel}/>
				
				
			
				{/*<a href="myfile.pdf"  download>Download</a>*/}
			
			<div className="text-justify px-3 pt-11 pb-11">
				<h1 className="text-3xl lg:text-6xl font-bold mb-10 leading-normal text-center">
    Постільна білизна від LUXTEX
  </h1>
    <p>
      Якість сну напряму впливає на нашу якість життя, а <a href="/product-category/bedding-sets">постільна білизна</a> від LUXTEX допоможе покращити ваш сон. Ми є експертами в цій галузі понад 20 років і використовуємо лише власні тканини, тому відповідаємо за якість нашої продукції. Наші комплекти виготовлені з високоякісних матеріалів і з увагою до деталей. Перегляньте наші <a href="/collections">колекції постільної білизни</a>, щоб знайти комплект, який підходить саме вам.
    </p>
    <p>
      Окрім естетичної складової, наша білизна має високі показники зносостійкості та зберігає форму після прання. Матеріали, які ми використовуємо, забезпечують комфортну температуру в ліжку протягом всієї ночі завдяки відповідній щільності тканини, що регулює теплообмін. Дізнайтеся більше про <a href="/about-us">нашу історію та стандарти якості</a>.
    </p>
  
  </div>		
			
			
			<div className="products container mx-auto px-4 my-10  ">
					<h2 className="products-main-title main-title mb-10  text-center text-3xl  lg:text-6xl font-bold">Категорії</h2>
				<div className="products container mx-auto hidden lg:block">

				
				
				<Swiper
				  autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				  }}
				  modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
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
  
    </Swiper>

			
	
			
		
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
		<h2 className="text-xl lg:text-2xl font-bold mb-10 mt-8">
    Розміри комплектів постільної білизни - підбір підковдри, наволочки та простирадла на резинці
  </h2>
  <div className="text-justify">
    <p>
      <strong>Постільна білизна</strong> від LUXTEX представлена в різних розмірах, що дає змогу підібрати оптимальний варіант для вашого ліжка: <strong>півтора, двоспальний, євро та сімейний</strong>. Ознайомтесь із таблицею розмірів нижче для зручності вибору відповідних розмірів підковдри, наволочки та простирадла. Детальні розміри доступні на сторінці кожного товару.
    </p>
  </div>
            {productTags.length ? (
				productTags
					.filter(tag => tag.slug !== "navolochky-5070")
					.filter(tag => tag.slug !== "navolochky-7070")
                .map(category => <ParentTagBlock category={category}/>)
				
            ) : ''}

<h2 className="text-xl lg:text-2xl font-bold mb-10 mt-8">Таблиця розмірів</h2>

<table className="size-full text-center border-1 border-gray-900" style={{ height: '171px', width: '100%' }}>
  <thead>
	<tr>
	  <th className="border border-gray-400 text-pers ">розмір</th>
	  <th className="border border-gray-400 text-pers ">підодіяльник</th>
	  <th className="border border-gray-400 text-pers ">простирадло</th>
	  <th className="border border-gray-400 text-pers ">наволочка</th>
	</tr>
  </thead>
  <tbody>
	<tr>
	  <td className="border border-gray-400 text-pers ">полуторний</td>
	  <td className="border border-gray-400 text-pers ">150*210</td>
	  <td className="border border-gray-400 text-pers ">150*210</td>
	  <td className="border border-gray-400 text-pers ">70*70/50*70(1шт.)</td>
	</tr>
	<tr>
	  <td className="border border-gray-400 text-pers ">двоспальний</td>
	  <td className="border border-gray-400 text-pers ">180*210</td>
	  <td className="border border-gray-400 text-pers ">200*220</td>
	  <td className="border border-gray-400 text-pers ">70*70/50*70(2шт.)</td>
	</tr>
	<tr>
	  <td className="border border-gray-400 text-pers ">євростандарт</td>
	  <td className="border border-gray-400 text-pers ">200*220</td>
	  <td className="border border-gray-400 text-pers ">220*220</td>
	  <td className="border border-gray-400 text-pers ">70*70/50*70(2шт.)</td>
	</tr>
	<tr>
	  <td className="border border-gray-400 text-pers ">сімейний</td>
	  <td className="border border-gray-400 text-pers ">150*210(2шт.)</td>
	  <td className="border border-gray-400 text-pers ">220*220</td>
	  <td className="border border-gray-400 text-pers ">70*70/50*70(2шт.)</td>
	</tr>
  </tbody>
</table>
        </div>
    </div>
    <div className="flex-grow">
	
	<h2 className="products-main-title main-title mb-10  text-center text-3xl  lg:text-6xl font-bold">Популярні товари</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {featuredproducts.length ? (
				
			featuredproducts.map(product => <ProductHome key={product.id} isLoggedIn={isLoggedIn} product={product}/>)
            ) : ''}
        </div>
    </div>
</div>



<div className="products container mx-auto mt-20">
  <h2 className="products-main-title main-title mb-5 text-3xl lg:text-6xl text-center font-bold">
    Приєднуйтеся до нашої Viber групи для ексклюзивних пропозицій та оновлень!
  </h2>

  <div className="flex justify-center items-center flex-col lg:flex-row">
    <div className="w-full lg:w-6/12 m-3 relative">
      <p className="text-justify mb-3">
        <strong>Шановні любителі затишку та комфорту!</strong> Запрошуємо вас приєднатися до нашої Viber групи, де ви отримуватимете першими інформацію про нові колекції постільної білизни та текстилю, а також спеціальні акційні пропозиції!
        
        Не пропустіть можливість бути в курсі всіх наших пропозицій та насолоджуватися комфортом разом з нами!
      </p>

      <div><strong>Приєднуйтеся за посиланням нижче:</strong></div>
      <a href="https://invite.viber.com/?g=Jzq36PUtHFBHc7yo6PwO9LwZE1xOid_3">
        <button className="button text-white px-5 py-5 mt-10 rounded-full w-full">
          Приєднатися <strong>Viber</strong>
        </button>
      </a>
    </div>
    <div onClick={handleDownload} className="w-full lg:w-6/12 m-3 relative">
      <Image alt="viber -luxtex" src={Telegram} />
    </div>
  </div>
</div>
{/*Prodduts*/}

<div className="mb-10">
  

  

  

  <h2 className="text-4xl lg:text-5xl font-bold mb-10 mt-8">
    Тканини, які використовує виробник постільної білизни LUXTEX
  </h2>
  <div className="text-justify">
    <p>
      Наша <a href="/product-category/bedding-sets">постільна білизна</a> виготовлена з різних тканин, таких як <a href="/product-category/postilna-bilyzna-ranfors">ранфорс</a>, 
      <a href="/product-category/postilna-bilyzna-byazi">бязь</a> та 
      <a href="/product-category/postilna-bilyzna-strayp-satyn">страйп сатин</a>.
      <br />
      <strong>Ранфорс</strong> – це гладка тканина з переплетенням тонкої нитки. Вона міцна, зносостійка та добре тримає колір після прання.
      <br />
      <strong>Бязь</strong> – це м'яка, гладка та приємна на дотик тканина, що добре пропускає повітря. Ідеальний вибір для людей з чутливою шкірою.
      <br />
      <strong>Страйп сатин</strong> – це тканина з глянцевим візерунком, який додає елегантності. Її щільне переплетення забезпечує високу міцність та зносостійкість.
    </p>

    <p>
      <br />
      <strong>Ми завжди на зв'язку з вами</strong> – наші оператори нададуть консультацію та допоможуть обрати потрібну білизну, а також нададуть додаткові фото та відео для вашої впевненості.
    </p>
    <p>
      Купуючи <a href="/product-category/ukrainian-textile">постільну білизну українського виробника</a> LUXTEX, ви можете бути впевнені у високій якості товару, що зробить ваш сон комфортним та здоровим.
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
