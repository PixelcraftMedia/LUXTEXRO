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
				{/*Hero Carousel*/}
				<HeroCarousel heroCarousel={heroCarousel}/>
				
				
			
				{/*<a href="myfile.pdf"  download>Download</a>*/}
			
			
				    
			
			
			
			<div className="products container mx-auto px-4 my-10  ">
			












            <div class="single-entry-summary">                              
                                                        
<h2 class="wp-block-heading">Ми завжди прагнемо задовольнити потреби наших клієнтів і готові допомогти в разі, якщо ви не повністю задоволені своєю покупкою.</h2>



<p>Якщо товар не підходить за розміром або кольором, ви можете повернути його або обміняти протягом <strong>14 днів.</strong></p>



<p className="text-xl mt-3">Є випадки, за яких навіть ми не зможемо прийняти повернення або обмін товару:</p>

<ul className="mt-3">
    <li>1. Товар був пошкоджений.</li>
    <li>2 .Товар був використаний</li>
    <li>3. Минуло понад 14 днів з дня отримання товару.</li>
</ul>




<p className="mt-3 text-xl"><strong>Зверніть увагу!</strong> </p>



<p className="mt-3">Ми не зможемо прийняти повернення товару після прання, навіть якщо він не використовувався. Виріб має бути невикористаним і незіпсованим, а комплектація та оригінальне пакування мають бути збережені. Якщо повернення товару здійснюється через поштові служби, доставку необхідно оплатити самостійно.</p>







<h2 className="text-xl mt-3">Відмова від товару, обмін та повернення товару</h2>



<p className="mt-3">Шановні покупці, ми дуже вдячні вам за те, що ви обрали наш інтернет-магазин LUXTEX і є нашими клієнтами. </p>



<p><strong>Наша мета</strong> – задоволення ваших потреб і надання найкращого сервісу!</p>



<p><strong>Для того, щоб уникнути непорозумінь, хочемо звернути вашу увагу на кілька моментів, які необхідно враховувати при виборі товару:</strong></p>



<p><em><strong>Перевірка, відмова та обмін товару – доставка кур’єром</strong></em></p>



<p className="mt-3">Під час отримання товару кур’єрською службою доставки ви маєте можливість перевірити якість товару, а також переконатися у відповідності його розмірів і комплектації до замовлення. Для цього співробітник компанії, який доставив товар (кур’єр), буде присутній при перевірці. Якщо вам доставлено товар, який ви замовляли, і він не має недоліків, але просто не підходить вам за формою, кольором, габаритами, фасоном або розмірами, згідно із законодавством обмін і повернення не здійснюється. Однак, ми завжди готові йти на зустріч клієнту, і ви можете повернути або обміняти товар при кур’єрі, якщо упаковку товару не пошкоджено. При цьому ви зобов’язані оплатити транспортні витрати. Якщо доставка товару була для вас безоплатною, то в разі відмови від товару ви зобов’язані будете оплатити вартість доставки товару в розмірі зазначеному компанією перевізником при поверненні товару (згідно з ЦКУ §2 глава 54, ст. 702 п. 3). </p>



<p className="mt-3"><em><strong>У разі доставки замовлення кур’єрською службою</strong></em>, у разі відмови, ви зобов’язані будете сплатити кур’єру вартість доставки. У цю вартість входить послуга вантажників і транспортування вантажним автомобілем.При доставці замовлення в квартиру стягується додаткова плата в розмірі зазначеному компанією перевізником.</p>



<h3 class="wp-block-heading">Правила повернення товарів при продажу товарів в Україні</h3>



<p>Усі пересилки по Україні, у разі повернення товару, оплачуються покупцем. Згідно із Законом України “Про захист правспоживачів” (№ 1023-ХII від 01.01.2016 р.), у разі відмови споживача від товару продавець повинен повернути грошову суму,сплачену споживачем за договором, за винятком витрат продавця на доставку від споживача повернутого товару, не пізніш якчерез десять днів з дня пред’явлення споживачем відповідної вимоги.</p>



<p className="mt-3"><strong>Ми хотіли б зазначити, що всі фотографії товарів на нашому сайті зроблені в умовах студійного освітлення, і колір товару при освітленні студійними софітами і “тьмяною лампочкою в коридорі” може значно відрізнятися.</strong></p>



<p className="mt-3">Якщо з якихось причин вам доставили не той товар, який ви замовили, то ви можете повернути або обміняти його без додаткової оплати, за умови належного збереження товару та оригінального пакування.</p>



<p className="mt-3">Однак, ми хотіли б звернути вашу увагу на те, що відповідно до ГОСТ 31307:2005 PS1554-99 зі змінами від 01.01.2007 “Білизна постільна. Загальні технічні умови”, міждержавний стандарт поширюється на постільну білизну: підковдри, простирадла, наволочки, ковдри, подушки та наматрацники, та ці товари відносяться до швейних виробів і не підлягають обміну та поверненню відповідно до ЗУ “Про захист прав споживачів”.</p>



<p className="mt-3">Будьте уважними при виборі товару і при виникненні будь-яких питань, не соромтеся звертатися до нас. Ми завжди готові допомогти вам. Ми надаємо нашим клієнтам достовірну інформацію про товари, проте іноді виробники можуть вносити зміни в свою продукцію без повідомлення нас. Тому, перед купівлею товару, просимо звертатися до наших консультантів для уточнення характеристик товару, що цікавлять, його ціни на момент купівлі, а також країни виробництва і збірки товару. Ми цінуємо наших клієнтів і завжди готові допомогти з вибором товару, щоб уникнути непорозумінь і збитків.</p>
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
