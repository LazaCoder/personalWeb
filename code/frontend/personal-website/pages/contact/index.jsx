import React from 'react';
import styles from "../../styles/Contact.module.css";
import Header from '../components/Header';


export default function index() {
return (
<div className="font-sans bg-gradient-to-b h-full">
    <Header />

    <div className="mx-10 h-full">
        <div className="flex flex-row justify-around items-start mt-10 ">

            <div className=" basis-1/3">
                <form action="" className="flex flex-col gap-3">
                    <div className="flex flex-row gap-16">
                        <div className="flex flex-col gap-1">
                            <div> <p> Name: </p></div>
                            <input type="text" name="name" id="name" required/>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div><p> Email: </p></div>
                            <input type="email" name="email" id="email" required/>
                        </div>
                         
                      

                    </div>

                    <div className="flex flex-col gap-1">
                            <div><p>Subject:</p></div>
                             <input type="text" name="subject" id="subject" required width={50}/>  
                         </div>

                         <div className="flex flex-col gap-1">
                            <div><p>Message:</p></div>
                             <textarea name="" id="" cols="30" rows="10" className="resize-none"></textarea> 
                         </div>

                         <div> <button type="submit">Send</button></div>



                </form>
            </div>

            <div className=" basis-1/3 flex">
                c

            </div>





        </div>



    </div>

</div>
)
}