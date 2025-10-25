import Sidebar from "../Componentes/sidebar";
import imagen1 from '../assets/imagen1.jpg'
import imagen2 from '../assets/imagen2.jpg'
import imagen3 from '../assets/imagen3.jpg'

function Home() { 
    return(

 <nav>       
               
            <div class="container">
            
            
        
            <aside>
                <Sidebar/>
            </aside>
        
            <main class="main-content">
            
            <div>

            
            <img class="imagenes" src={imagen1} alt="" />
            <img class="imagenes" src={imagen2} alt="" />
            <img class="imagenes" src={imagen3} alt="" />
            </div>


            </main>
        </div> 
        
        </nav>
        )

         }



export default Home;

