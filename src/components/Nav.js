import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import CartIconmob from "./cart/CartIconmob";
import { useState } from 'react';
import profilePic from '../../public/logo.png'
import Image from 'next/image'
import { useAuth } from './login-function/hooks';
const Nav = () => {
	const { isLoggedIn } = useAuth();
	const [ isMenuVisible, setMenuVisibility ] = useState(false);
    const [activeIndex, setActiveIndex] = useState(2);
	
	const questionsAnswers = [
			
	  {
		id: 2,
		  title: "З БЯЗІ",
		  subone:"півтораспальні",
		  subtwo:"двоспальний",
		  subevro:"євро",
		  subfamily:"сімейний",
		linksubone:"https://lux-tex.com.ua/tag/biazi-pivtoraspalnyy",
		linksubtwo:"https://lux-tex.com.ua/tag/biazi-dvospalnyy",
		linksubevro:"https://lux-tex.com.ua/tag/biazi-evrostandart",
		linksubfamily:"https://lux-tex.com.ua/tag/biazi-simeynyy",

	  },
	  {
		id: 3,
		title: "З РАНФОРСУ",
		subone:"півтораспальні",
		subtwo:"двоспальний",
		subevro:"євро",
		subfamily:"сімейний",
	  linksubone:"https://lux-tex.com.ua/tag/ranfors-pivtoraspalnyy",
	  linksubtwo:"https://lux-tex.com.ua/tag/ranfors-dvospalnyy",
	  linksubevro:"https://lux-tex.com.ua/tag/ranfors-evrostandart",
	  linksubfamily:"https://lux-tex.com.ua/tag/ranfors-simeynyy",

	 
	
	  },
	  {
		id:4,
		  title: "З САТИНУ",
		  subone:"півтораспальні",
		  subtwo:"двоспальний",
		  subevro:"євро",
		  subfamily:"сімейний",
		linksubone:"https://lux-tex.com.ua/tag/strayp-satyn-pivtoraspalnyy",
		linksubtwo:"https://lux-tex.com.ua/tag/strayp-satyn-dvospalnyy",
		linksubevro:"https://lux-tex.com.ua/tag/strayp-satyn-evrostandart",
		linksubfamily:"https://lux-tex.com.ua/tag/strayp-satyn-simeynyy",

	
		
	  },
	  {
		id:5,
		  title: "ДИТЯЧІ",
		  subone:"півтораспальні",
		  subtwo:"в ліжечко",
		  subevro:"ковдри та подушки",
		linksubone:"https://lux-tex.com.ua/tag/dytyachi-polutornyy",
		linksubtwo:"https://lux-tex.com.ua/tag/dytyachi-v-lizhechko",
		linksubevro:"https://lux-tex.com.ua/tag/dytiachi-covdry-ta-podushky",
		
		linksubfamily:"/",
	  },
	  {
		id: 6,
		  title: "ПРОСТИРАДЛА",
		  subone:"Односпальне",
		  subtwo:"Півтораспальне",
		  subevro:"Двоспальне",
		  subfamily:"Євростандарт",
		linksubone:"https://lux-tex.com.ua/tag/prostyradlo-na-rezyntsi-odnospalne",
		linksubtwo:"https://lux-tex.com.ua/tag/prostyradlo-na-rezyntsi-pivtoraspalne",
		linksubevro:"https://lux-tex.com.ua/tag/prostyradlo-na-rezyntsi-dvospalne",
		linksubfamily:"https://lux-tex.com.ua/tag/prostyradlo-na-rezyntsi-evrostandart",
	  },
	  
	
	  {
		id: 6,
		  title: "ТЕКСТИЛЬ",
		  subone:"",
		  subtwo:"Покривала",
		  subevro:"Ковдри та подушки",
		  subfamily:"Текстиль для готелів",
		linksubone:"",
		linksubtwo:"https://lux-tex.com.ua/tag/pokryvala",
		linksubevro:"https://lux-tex.com.ua/tag/kovdry-ta-podushky",
		linksubfamily:"https://lux-tex.com.ua/tag/textil-dlia-hoteliv",
	  },
	  {
		id: 7,
		title: "ІНФОРМАЦІЯ",
		subone:"ДОСТАВКА І ОПЛАТА",
		subtwo:"ОБМІН ТА ПОВЕРНЕННЯ",
		subevro:"ПРО НАС",
		
	  linksubone:"https://lux-tex.com.ua/dostavka-i-oplata",
	  linksubtwo:"https://lux-tex.com.ua/obmin-ta-povernennya-tovaru",
	  linksubevro:"https://lux-tex.com.ua/pro-nas",
	 
	  
	  linksubfamily:"/",
	  },
	
	];
	
	const Data =  questionsAnswers
	const renderedQuestionsAnswers = Data.map((item, index) => {
		const showDescription = index === activeIndex ? "show-description" : "";
		const fontWeightBold = index === activeIndex ? "font-light " : "";
		
		const ariaExpanded = index === activeIndex ? "false" : "true";
		return (
			
			
			
			<li  key={item.id}
					aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button ${fontWeightBold} `}
	
		onClick={() => {
			setActiveIndex(index);
		  }}>
					<div className="block drawer">
					{item.title	}<span className="caret ml-6"></span>
				</div>
				
					<ul id={`faq${index + 1}_desc`}
        data-qa="faq__desc"
        className="">
						<li className="block">
						
						<Link href={item.linksubone	}>
								<div className={`${ item.linksubone === "" ? 'hidden' : `hidden ${showDescription}`}`}>
								{item.subone}
								</div>
							</Link>
							{item.subtwo && item.subtwo !== "" && (
							<Link href={item.linksubtwo	}>
								<div className={`${ item.linksubtwo === "" ? 'hidden' : `hidden ${showDescription}`}`}>
								{item.subtwo}
								</div>
							</Link>)}
							{item.subevro && item.subevro !== "" && (
							<Link  href={item.linksubevro	}>
								<div className={`${ item.linksubevro === "" ? 'hidden' : `hidden ${showDescription}`}`} >
							{item.subevro}
								</div>
							</Link>)}
							{item.subfamily && item.subfamily !== "" && (		<Link  href={item.linksubfamily	}>
								<div className={`${ item.linksubfamily === "" ? 'hidden' : `hidden ${showDescription}`}`} >
							{item.subfamily}
								</div>
							</Link>)}
						</li>
						
						
					</ul>
					
					</li>
			
			
				
				
			
		
		);
	  });
	  const renderedQuestionsAnswersDesctop = Data.map((item, index) => {
	
		return (
			
			
			<li className="nav-item relative   " key={item.id}>
					
						<div  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:bg-blue hover:transition  delay-150 duration-300 ease-in-out ... hover:text-white transition-all cursor-pointer lead_hover px-3 py-5">
						{item.title	} <span className="caret"></span>
						</div>
					
						<ul className={`${ item.item === "" ? 'hidden' : 'dropdown-menus py-5 px-6 bg-blue mt-10  '}`}>
							
							<li> 
								<Link href={item.linksubone	}>
						            <div className={`${ item.linksubone=== "" ? 'hidden' : 'block py-2 lg:inline-block lg:mt-0 font-thin text-lg text-white  hover:text-white '}`}>
									{item.subone}
								
						            </div>
					            </Link>
							</li>
							<li> 
								<Link href={item.linksubtwo	}>
						            <div className={`${ item.linksubtwo === "" ? 'hidden' : 'block py-2 lg:inline-block lg:mt-0 font-thin text-lg text-white  hover:text-white  '}`}>
						            
									{item.subtwo}
						            </div>
					            </Link>
							
							</li>
							<li> 
							
								<Link href={item.linksubevro	}>
						            <div className={`${ item.linksubevro === "" ? 'hidden' : 'block py-2 lg:inline-block lg:mt-0 font-thin text-lg text-white  hover:text-white  '}`}>
						            
									{item.subevro}
						            </div>
					            </Link>
							</li>
							<li> 
							
							<Link href={item.linksubfamily	}>
								<div className={`${ item.linksubfamily === "" ? 'hidden' : 'block py-2 lg:inline-block lg:mt-0 font-thin text-lg text-white  hover:text-white  '}`}>
								
								{item.subfamily}
								</div>
							</Link>
						</li>
							
						</ul>
						</li>
			
		
		);
	  });
	return (

		
		<nav className="mx-2 ">
			<div className="flex items-center justify-between container mx-auto">

				<div className="flex items-center flex-shrink-0 text-black mr-20 w-40">
					{/*<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>*/}
					<Link href="/">
					<Image  src={profilePic}  alt="Luxtex - постільна білизна від виробника logo"/>
					</Link>
					<span className="font-semibold text-xl tracking-tight">
					<Link href="/">
					<div className=""></div>
					</Link>
					</span>
				</div>
				<>
		
	
			</>
				{/*Menu button*/}
				{/*<div>
				<a href="/registration/register/" className="block  lg:hidden lg:mt-0 text-black hover:text-black  rounded-full p-2 bg-gray-200">
						<svg xmlns="http://www.w3.org/2000/svg" className=" lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="gray"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
							
						</a></div>*/}
							
				<div className=" py-3 lg:hidden flex items-center">
				<CartIconmob/>
				<input id="hamburger" className="hamburger" type="checkbox"/>
				<label className=" hamburger" for="hamburger">
		  <i></i>
		{/*  <span>
			<span className="close">close</span>
			<span className="open">menu</span>
		  </span>*/}
		</label>
		<section className="drawer-list bg-blue ">
		<ul className="">
			
		{renderedQuestionsAnswers}
		</ul>
			</section>
				</div>

				{/*MMenu in mobile*/}
				<div className={`${ isMenuVisible ? 'max-h-full h-full' : 'h-0' } w-full hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}>
					<ul className="text-sm font-medium  lg:flex-grow lg:flex h-full ">
					{renderedQuestionsAnswersDesctop}
					</ul>
					
					<div className="text-sm font-medium">
					{/*}	<a href="/registration/register/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
							Profile
						</a>
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
							Wishlist
		</a>*/}
						<CartIcon/>
					</div>
				</div>

			</div>
		</nav>
	
	)
};

export default Nav;