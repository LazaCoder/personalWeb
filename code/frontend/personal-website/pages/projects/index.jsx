import Image from 'next/image';
import 'tailwindcss/tailwind.css'; // import Tailwind CSS
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';


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
    <div className="font-sans">
        <Header/>
        <div className="mx-10">
    <div className="text-6xl font-bold mt-20 mb-6 h-20 text-gray-800">My portafolio</div>
    <div className="bg-black h-1 w-1/1 mb-12 rounded-full"></div>
    <div className="flex justify-normal items-start mt-0 ">
        
        <div className="basis-1/3 flex" data-aos="fade-right">
            <div className="overflow-hidden  border-2 border-solid rounded-sm  border-gray-600">
                <Image width={400} height={400} src="/homedecor.png" alt="Ivan Lazarusic" />
            </div>
        </div>
        <div className="basis-1/3" data-aos="fade-right">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 overflow-hidden">Home Decor website</h1>
        
            <p className="text-lg text-gray-600">
            The website features a wide range of options including product browsing and selection, specific item filtering and searching, quantity choices, as well as inquiry submission and email newsletter sign-up. Additionally, it includes a blog section for decorating inspiration, offering ideas and tips for home design. 
            This project demonstrates how combining technology and design can create a high-quality online shopping experience.
            </p>
            <button className="bg-gray-800 text-white font-semibold py-2 px-4 mt-5 rounded-xl hover:border-black hover:border hover:text-black hover:bg-gray-300 transition duration-300 ease-in-out" onClick={handlePortafolio}>
                    View on Github
            </button>
        </div>

        <div className="basis-1/3 ml-10" data-aos="fade-right">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 overflow-hidden">Technologies</h1>
            <div className="bg-blue-500 h-1 w-96 mb-4"></div>

            <div className="flex flex-wrap gap-4 text-3xl">
            <div className="border-none rounded-xl bg-gray-300 px-3 py-1">ReactJS</div>
            <div className="border-none rounded-xl bg-gray-300 px-3 py-1">NextJS</div>
            <div className="border-none rounded-xl bg-gray-300 px-3 py-1">ExpressJS</div>
            <div className="border-none rounded-xl bg-gray-300 px-3 py-1">HTML</div>
            <div className="border-none rounded-xl bg-gray-300 px-3 py-1">CSS</div>
            <div className="border-none rounded-xl bg-gray-300 px-3 py-1">Javascript</div>
            <div className="border-none rounded-xl bg-gray-300 px-3 py-1">CMS</div>
            </div>


        </div>
    </div> 
    </div>
    </div>
  )
}
