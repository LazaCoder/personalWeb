import Image from 'next/image';
import 'tailwindcss/tailwind.css'; // import Tailwind CSS
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';


export default function Hero() {
     let router = useRouter();

    useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 1200, // values from 0 to 3000, with step 50ms
          once: true, // whether animation should happen only once - while scrolling down
        });
      }, []);

     const handleContact = () =>{

        router.push('/contact')
      }

      const handlePortafolio = () =>{

        router.push('/projects')
      }
      


  return (
    <div className="flex justify-between items-center mt-16 mx-52">
        <div className="w-1/2 flex justify-center items-center" data-aos="fade-right">
            <div className="rounded-full overflow-hidden border-6 border-black">
                <Image width={400} height={400} src="/profilna.jpeg" alt="Ivan Lazarusic" />
            </div>
        </div>
        <div className="w-1/2" data-aos="fade-right">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 overflow-hidden">Ivan Lazarusic</h1>
            <div className="bg-blue-500 h-1 w-1/2 mb-4"></div>
            <p className="text-lg text-gray-600">
                Welcome to my personal space on the web. As a front-end developer with a passion for creating elegant and efficient user interfaces and also object oriented Java projects, my journey has taken me from the beautiful coasts of Split to the academic halls of Zagreb's FER and back, where I'm currently enriching my expertise at FESB.
                Away from the keyboard, I find solace in the strings of my guitar and the discipline of the gym. Dive into my portfolio to see the stories woven through code, where each project narrates a chapter of my professional saga.
            </p>
            <div className="flex gap-4 mt-5">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline" onClick={handleContact}>
                    Contact Me
                </button>
                
                <button className="bg-transparent text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded-full hover:border-transparent hover:text-white hover:bg-black transition duration-300 ease-in-out" onClick={handlePortafolio}>
                    View Portfolio
                </button>
            </div>
        </div>
    </div>
  )
}
