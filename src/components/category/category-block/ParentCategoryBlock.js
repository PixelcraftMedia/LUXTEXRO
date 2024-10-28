import Link from 'next/link';
import Image from "../../../image";
import {DEFAULT_CATEGORY_IMG_URL} from "../../../constants/urls";
import { isEmpty } from 'lodash';

const ParentCategoryBlock = ( props ) => {

	const { category } = props;
	if (category?.image ===  null) {
        return (<div className='hidden'></div>)
    }
	else {
 return (
		
			<Link href={`/category/${category?.slug}`}>
				<div className='bg-white p-2 animated-background'>
			
					<Image
					height={900} width={900}
					objectPosition="center center" fill={true} objectFit={'cover'}
						className=" rounded-lg"
						layout="fill"
						containerClassNames="h-80 md:h-96 "
						priority={true}
							
						  
							sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
						sourceUrl={ category?.image?.sourceUrl ?? '' }
						defaultImgUrl={DEFAULT_CATEGORY_IMG_URL}
						altText={category?.image?.altText ?? category.slug}
						alt={category?.name}
					/>
					
					<h3 className="absolute top-2 left-2 text-text_grey bg-bottons px-2 py-2 rounded-lg">{category?.name}</h3>
				
				</div>
			</Link>
		
	);}
}

export default ParentCategoryBlock;
