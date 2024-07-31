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
									titulo:"Monsta",
									descripcion:"Ecommerce de Apple" ,
									urlImagen:"/imagenes/monsta.jpg",
									urlProyecto:"https://monsta.asciende.pe/"

								},
								
								{

									numero : 2 ,
									titulo:"Cardwest",
									descripcion:"Ecommerce de ropa casual" ,
									urlImagen:"/imagenes/cardwest.webp",
									urlProyecto:"https://cardwest.pe/"

							   },


								{

									 numero : 3 ,
									 titulo:"Gentlemen",
									 descripcion:"Ecommerce de ropa casual" ,
									 urlImagen:"/imagenes/02gentlemenStore.jpg",
									 urlProyecto:"https://gentlemenstore.pe/"

								},
								
								

								{

									 numero : 4 ,
									 titulo:"Infante & Abogados",
									 descripcion:"Web de Abogados" ,
									 urlImagen:"/imagenes/infante-y-abogados-01.jpg",
									 urlProyecto:"https://infanteyabogados.pe"

								},

								{

									numero : 5 ,
									titulo:"Quiro Innova",
									descripcion:"Web Quiropráctica" ,
									urlImagen:"https://quiroinnova.pe/wp-content/uploads/2024/05/banner-quiroinnova-04.png",
									urlProyecto:"https://quiroinnova.pe"

							   },

							   {

								numero : 6 ,
								titulo:"J&J TC SAC",
								descripcion:"Web Informativa" ,
								urlImagen:"https://jjtracorp.asciende.pe/wp-content/uploads/2024/07/foto-equipo-jj01-1536x1023.jpeg",
								urlProyecto:"https://jjtracorp.asciende.pe"

						   		},
								{

									 numero : 8 ,

									 titulo:"Sistema de Asistencia",
									 descripcion:"Proyecto de registro de Asistencia " ,
									 urlImagen:"https://www.buk.cl/hubfs/por-que-tener-un-control-de-asistencia-de-personal.jpg",
									 urlProyecto:"https://asistenciasasciende.netlify.app/"
									

								}




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
		        		<span> T</span>
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