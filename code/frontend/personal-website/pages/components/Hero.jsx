import Image from 'next/image';
import 'tailwindcss/tailwind.css'; // import Tailwind CSS

export default function Hero() {
  return (
    <div className="flex justify-between items-center mt-16 mx-52">
        <div className="w-1/2 flex justify-center items-center">
            <div className="rounded-full overflow-hidden border-6 border-black">
                <Image width={400} height={400} src="/profilna.jpeg" alt="Ivan Lazarusic" />
            </div>
        </div>
        <div className="w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 overflow-hidden">Ivan Lazarusic</h1>
            <div className="bg-blue-500 h-1 w-1/2 mb-4"></div>
            <p className="text-lg text-gray-600">
                Welcome to my personal space on the web. As a front-end developer with a passion for creating elegant and efficient user interfaces, my journey has taken me from the beautiful coasts of Split to the academic halls of Zagreb's FER and back, where I'm currently enriching my expertise at FESB.
                Away from the keyboard, I find solace in the strings of my guitar and the discipline of the gym. Dive into my portfolio to see the stories woven through code, where each project narrates a chapter of my professional saga.
            </p>
        </div>
    </div>
  )
}
