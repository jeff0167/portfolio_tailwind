import '../App.scss';
import { useNavigate } from "react-router-dom";
import portrait from '../images/Portrait.jpg';
import project from '../images/Project.jpg'; // ever since building and deploying, you have to import the image, and using anything from the public folder is not allowed
import other from '../images/Rock2.jpg'; // and the routing is messed up

function HomePage() {  // shift + alt + f  to format

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path; 
      navigate(path);
    }

  return (
      <div>
        <code class="code">My portfolio</code>
        <div className="container">
            <div class="grid grid-cols-3 gap-5 justify-items-center">
                <div class="max-w-xl rounded bg-zinc-800" onClick={()=> navigate("about")}>
                    <div className='imageZoom'>
                        <img alt="Portrait" src={portrait}></img>
                    </div>
                    <div class="px-6 py-4">
                        <p class="text-white text-center text-base">About me</p>
                    </div>
                </div>
                <div class="max-w-xl rounded bg-zinc-800" onClick={()=> navigate("projects")}>
                    <div className='imageZoom'>
                        <img alt="Portrait" src={project}></img>
                    </div>
                    <div class="px-6 py-4">
                        <p class="text-white text-center text-base">Projects</p>
                    </div>
                </div>
                <div class="max-w-xl rounded bg-zinc-800">
                    <div className='imageZoom'>
                        <img alt="Portrait" src={other}></img>
                    </div>
                    <div class="px-6 py-4">
                        <p class="text-white text-center text-base">Other</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomePage;