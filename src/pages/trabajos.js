// COMPONENTES
import Layout from '../../layout/Layout';
import Proyecto from '../../components/Proyecto';


//HOOK
import {useEffect} from 'react';

import UseContext from '../../hooks/useContext';




const Trabajos = ()=>{

	const {clickEnLinkContacto, setClickEnLinkContacto} = UseContext();

	//console.log(proyectos);

  //ANIMAR LETRAS DEL TEXTO
  useEffect(()=>{

    const letrasTitulo3 = document.querySelectorAll("h2 span");

    animarLetras(letrasTitulo3);

  },[]);

    function animarLetras(letras){

      
        for(var i=0 ; i<letras.length ; i++){

        
          let alturaAnimado = letras[i].offsetTop;


              letras[i].classList.add("letra","letra-"+i);

          

        }


    }


	//ARREGLO EL CUAL CONTIENE DATOS DE TODOS MIS PROYECTOS

	const arregloProyectos = [ 

							
							
								{

									numero : 1 ,
									titulo:"Cardwest",
									descripcion:"Ecommerce de ropa casual" ,
									urlImagen:"/imagenes/cardwest.webp",
									urlProyecto:"https://cardwest.pe/"

							   },
							   {

								numero : 2 ,
								titulo:"One Data",
								descripcion:"Análisis de Datos" ,
								urlImagen:"https://images.pexels.com/photos/5831511/pexels-photo-5831511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
								urlProyecto:"https://cardwest.pe/"

						   		},


								{

									 numero : 3 ,
									 titulo:"Infante & Abogados",
									 descripcion:"Web de Abogados" ,
									 urlImagen:"https://infanteyabogados.pe/wp-content/uploads/2024/04/gavel-on-wooden-table-and-lawyer-or-judge-working-with-agreement-in-courtroom-theme-768x401.jpg",
									 urlProyecto:"https://infanteyabogados.pe"

								},

								{

									numero : 4 ,
									titulo:"Quiro Innova",
									descripcion:"Web Quiropráctica" ,
									urlImagen:"https://quiroinnova.pe/wp-content/uploads/2024/05/banner-quiroinnova-04.png",
									urlProyecto:"https://quiroinnova.pe"

							   },

							   {

								numero : 5 ,
								titulo:"J&J TC SAC",
								descripcion:"Web Informativa" ,
								urlImagen:"https://jjtracorp.com/wp-content/uploads/2024/06/camioneselevadores-portada-vehiculo.png.png",
								urlProyecto:"https://jjtracorp.com"

						   		},

								{

									numero : 6 ,
									titulo:"ASCIENDE",
									descripcion:"Landing Page" ,
									urlImagen:"https://images.pexels.com/photos/9489074/pexels-photo-9489074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
									urlProyecto:"https://asciende.pe/"
	
								},
								{

									numero : 7 ,
									titulo:"HR-IN",
									descripcion:"Landing Page" ,
									urlImagen:"https://images.pexels.com/photos/8441790/pexels-photo-8441790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
									urlProyecto:"https://www.hr-in.com/potencia-tu-talento-empresarial"
	
								},

								{

									numero : 8 ,
									titulo:"G & A",
									descripcion:"Web Informativa" ,
									urlImagen:"https://andersoncalderoncampos.com/wp-content/uploads/2024/09/MG_4229-GRUPO-scaled.jpg",
									urlProyecto:"https://garayattorneys.com/"
	
								},

								




							 ];






	return(

			<Layout

		        title="Anderson | Mis Trabajos"
		        description="Hola , soy Anderson , desarrollador web . Estos son mis trabajos."
		       

		      >


		        <main className="md:pl-16 pb-5">

		        	<h2 className="text-center  mb-10 text-white mt-10">
		        		
						
		        		<span>M</span>
		        		<span>i</span>
		        		<span>s</span>
		        		<span>T</span>
		        		<span>r</span>
		        		<span>a</span>
		        		<span>b</span>
		        		<span>a</span>
		        		<span>j</span>
		        		<span>o</span>
		        		<span>s</span>

		        	</h2>

		        	{

		        		//proyectos.map(({attributes : proyecto})=>{

		        			arregloProyectos.map((proyecto)=>{
		        				
		        		
		        				

		        				return(


		        							<Proyecto  	

		        								key={proyecto.numero}
		        								proyecto={proyecto}


		        							 />


		        						)

		        		})		


		        	}	        

		        </main>


		     </Layout>


			)

}

export default Trabajos;


// export async function getStaticProps(){


// 	const respuesta = await fetch("http://127.0.0.1:8082/api/proyectos?populate=imagen&sort[0]=id%3Aasc");

// 	const {data} = await  respuesta.json();

// 	console.log(data);

// 	return{


// 			props:{


// 						data

// 				   }



// 		}



// }