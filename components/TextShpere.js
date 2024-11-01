import React  , {useEffect} from 'react';

import TagCloud from 'TagCloud';

import styles from '@/styles/Home.module.css'

const TextShpere = ()=>{

	useEffect(()=>{

		
		


						const container  = ".tagcloud";

						const texts = [

											"REACT.JS",
											"NODE.JS",
											"JS",
											"JQUERY",
											"HTML5",
											"CSS3",
											"TAILWIND",
											"WORDPRESS",
											"ELEMENTOR",
											"WOOCOMMERCE",
											"PHP",
											"BOOTSTRAP 5",
											"SQL SERVER",
											"MYSQL",
											"SQL SERVER",
											"GOOGLE WORK SPACE",
											"CRM KOMMO",
											"CPANEL",
											"GOOGLE SEARCH CONSOLE",
											"GOOGLE TAG MANAGER",
											"WIX"
											
									   ];

							const options ={


												radius:150,
												maxSpeed:"fast",
												initSpeed:"fast",
												keep:true,


											};

			
		// return ()=>{									
						
				TagCloud(container,texts,options)		



		// }	  


	},[]);


	return(


			<>


				<div className="text-shpere w-50">

					<span className="tagcloud w-50">



					</span>


				</div>

				

			</>



		  );

}


export default TextShpere;