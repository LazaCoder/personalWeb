import Image from 'next/image';
import 'tailwindcss/tailwind.css'; // import Tailwind CSS
import {
useEffect
} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
useRouter
} from 'next/navigation';
import Header from '../components/Header';
import styles from "../../styles/Projects.module.css";


export default function Hero() {
let router = useRouter();

useEffect(() => {
// Initialize AOS
AOS.init({
duration: 1200,
once: true, // Whether animation should happen only once - while scrolling down
offset: 300, // Offset to trigger animation in pixels
});
}, []);

const handlePortafolio = (event) => {

if(event.currentTarget.classList.contains('homedecor')){
router.push("https://github.com/LazaCoder/HCIprojekt");
} else if (event.currentTarget.classList.contains('personalweb')) {
router.push("https://github.com/LazaCoder/personalWeb");
} else if (event.currentTarget.classList.contains('personalweb')) {
    router.push("https://github.com/LazaCoder/homeAssistantProject");
    }
}



return (
<div className="font-sans bg-gradient-to-b">
    <Header />
    <div className="mx-10">
        <div className="text-6xl font-bold mt-7 mb-6 h-20 text-gray-800">My portfolio</div>
        <div className="  h-0.2 w-1/1 mb-12 border rounded-full divider"></div>
        <div className="flex justify-normal items-start mt-0">

            <div className="basis-1/3 flex" data-aos="fade-right">
                <div className="overflow-hidden  border-2 border-solid rounded-sm  border-gray-600">
                    <Image width={400} height={400} src="/homedecor.png" objectFit='cover' alt="Ivan Lazarusic" />
                </div>
            </div>
            <div className="basis-1/3" data-aos="fade-right">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 overflow-hidden">Home Decor Website</h1>

                <p className="text-lg text-gray-600">
                    The website features a wide range of options including product browsing and selection, specific item
                    filtering and searching, quantity choices, as well as inquiry submission and email newsletter
                    sign-up. Additionally, it includes a blog section for decorating inspiration, offering ideas and
                    tips for home design.
                    This project demonstrates how combining technology and design can create a high-quality online
                    shopping experience.
                </p>
                <button
                    className="bg-gray-800 text-white font-semibold py-2 px-4 mt-5 rounded-xl hover:border-black hover:border hover:text-black hover:bg-gray-300 transition duration-300 ease-in-out homedecor"
                    onClick={handlePortafolio}>
                    View on Github
                </button>
            </div>

            <div className="basis-1/3 ml-10" data-aos="fade-right">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 overflow-hidden">Technologies</h1>
                <div className="bg-blue-500 h-1 rounded-full w-96 mb-4"></div>

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
        <div className="h-0.5 w-full mb-12 mt-12 border-t border-gray-500 border-dashed rounded-full"></div>
        <div className="flex justify-normal items-start mt-2 mb-10">

            <div className="basis-1/3 flex">
                <div className="overflow-hidden  border-2 border-solid rounded-sm mb-10   border-gray-600">
                    <Image width={400} height={400} objectFit='cover' src="/homeAssistant.png" alt="Ivan Lazarusic" />
                </div>
            </div>
            <div className="basis-1/3">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 overflow-hidden">Home Assistant Web App</h1>

                <p className="text-lg text-gray-600">
                    This thesis develops a web application for smart home data visualization,
                    utilizing the Home Assistant platform for device management and automation.
                    It introduces smart homes and IoT, details the use of Home Assistant and React for development,
                    and describes the application implementation and functionalities.
                    A case study demonstrates its practical application in smart home environments,
                    highlighting the importance of modern IoT technologies.
                </p>
                <button className={`bg-gray-800 text-white font-semibold py-2 px-4 mt-5 rounded-xl hover:border-black
                    hover:border hover:text-black hover:bg-gray-300 transition duration-300 ease-in-out homeAssistant
                    ${styles.buttonShadow}`} onClick={handlePortafolio}>
                    View on Github
                </button>
            </div>

            <div className="basis-1/3 ml-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 overflow-hidden">Technologies</h1>
                <div className="bg-blue-500 h-1 w-96 mb-4"></div>

                <div className="flex flex-wrap gap-4 text-3xl">
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">ReactJS</div>
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">Home Assistant</div>
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">HTML</div>
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">CSS</div>
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">Javascript</div>
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">Philips Hue</div>
                </div>
            </div>
        </div>
        <div className="h-0.5 w-full mb-20 border-t border-gray-500 border-dashed rounded-full"></div>

        <div className="flex justify-normal items-start mt-2 mb-10">

            <div className="basis-1/3 flex">
                <div className="overflow-hidden  border-2 border-solid rounded-sm mb-10   border-gray-600">
                    <Image width={400} height={400} objectFit='cover' src="/logo.png" alt="Ivan Lazarusic" />
                </div>
            </div>
            <div className="basis-1/3">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 overflow-hidden">Personal Website</h1>

                <p className="text-lg text-gray-600">
                    In the world of digital age, a personal website serves as the cornerstone of a professional online
                    identity.
                    With that philosophy in mind, I created this website to highlight my projects, share my thoughts,
                    and facilitate connections with fellow developers and potential employers.
                    The website features a clean, responsive design, a dynamic blog,
                    and a portfolio section that together present my work and ideas in the best light.
                </p>
                <button className={`bg-gray-800 text-white font-semibold py-2 px-4 mt-5 rounded-xl hover:border-black
                    hover:border hover:text-black hover:bg-gray-300 transition duration-300 ease-in-out personalweb
                    ${styles.buttonShadow}`} onClick={handlePortafolio}>
                    View on Github
                </button>
            </div>

            <div className="basis-1/3 ml-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 overflow-hidden">Technologies</h1>
                <div className="bg-blue-500 h-1 w-96 mb-4"></div>

                <div className="flex flex-wrap gap-4 text-3xl">
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">ReactJS</div>
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">NextJS</div>
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">Tailwind CSS</div>
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">HTML</div>
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">CSS</div>
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">Javascript</div>
                    <div className="border-none rounded-xl bg-gray-300 px-3 py-1">Figma</div>
                </div>
            </div>
        </div>


    </div>



</div>
)
}