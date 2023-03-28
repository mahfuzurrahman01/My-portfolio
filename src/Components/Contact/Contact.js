import React from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import Title from '../../Shared/Title';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaDev } from 'react-icons/fa';

const Contact = () => {
    // Toast will shown on successfully sending message
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    const sendMail = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.user_email.value;
        const message = e.target.message.value;
        if (name === "" || email === "" || message === "") {
            Toast.fire({
                icon: 'error',
                title: 'Please fill up the form correctly'
            })
            return
        }
        emailjs.sendForm("service_zfaqsi2", "template_hwlyjuo", e.target, "jydZGqe-GlimsB-Bv")
            .then(
                response => {
                    console.log('SUCCESS!', response.status, response.text)
                    Toast.fire({
                        icon: 'success',
                        title: 'Message received!'
                    })
                    e.target.reset()
                }
            ).catch(
                error => console.log(error)
            )

    }

    return (
        <div className='mt-5 pb-10' id="contact">
            <Title name={'Contact'} />
            <section data-aos="zoom-in" data-aos-duration="700" className="py-6 bg-gray-100 text-gray-600 rounded-lg">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-lg pb-1 border-b-2 w-4/6" >Social media</h1>
                        <div className='flex my-5 items-center gap-5 flex-wrap'>
                            <div className='bg-gray-50 p-2 w-14 h-12 rounded-lg hover:duration-500 hover:bg-gray-600 hover:text-gray-50 hover:scale-110'><a href='https://github.com/mahfuzurrahman01' target="_blank" rel='noreferrer'><BsGithub className='w-full h-full ' /></a></div>
                            <div className='bg-gray-50 p-2 w-14 h-12 rounded-lg hover:duration-500 hover:bg-gray-600 hover:text-gray-50 hover:scale-110'>
                                <a href='https://www.facebook.com/abir.hossin.313/' target="_blank" rel='noreferrer'><BsFacebook className='w-full h-full ' /></a>
                            </div>
                            <div className='bg-gray-50 p-2 w-14 h-12 rounded-lg hover:duration-500 hover:bg-gray-600 hover:text-gray-50 hover:scale-110'>
                                <a href="https://www.linkedin.com/in/mahfuzur-rahman01/" target='_blank' rel='noreferrer'>
                                    <BsLinkedin className='w-full h-full ' />
                                </a>
                            </div>
                            <div className='bg-gray-50 p-2 w-14 h-12 rounded-lg hover:duration-500 hover:bg-gray-600 hover:text-gray-50 hover:scale-110'>
                                <a target="_blank" rel="noreferrer" href="https://dev.to/mahfuzurrahman01"><FaDev className='w-full h-full ' /></a>
                            </div>
                        </div>
                        <h1 className="text-lg pb-1 border-b-2 w-4/6" >Address details</h1>
                        <div className="space-y-4 mt-5">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Dhaka, Bangladesh</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>+880 1632505258</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>mafuzur.rahman032@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className='text-center border-b-2 pb-3 md:w-4/6 w-full md:mx-auto lg:mb-5 mb-2 md:mt-0 mt-5 text-lg'>Start a conversation from here</p>
                        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid" onSubmit={sendMail}>
                            <label className="block">
                                <span className="mb-1">Full name</span>
                                <input type="text" name='name' placeholder="Your name here" className="block w-full py-1 px-2 rounded-md shadow-sm outline-none duration-300 focus:bg-gray-300 bg-gray-600 focus:text-gray-600 text-gray-200 " />
                            </label>
                            <label className="block">
                                <span className="mb-1">Email address</span>
                                <input type="text" name='user_email' placeholder="Your email here" className="block w-full py-1 px-2 rounded-md shadow-sm outline-none duration-300 focus:bg-gray-300 bg-gray-600 focus:text-gray-600 text-gray-200 " />
                            </label>
                            <label className="block">
                                <span className="mb-1">Message</span>
                                <textarea name='message' rows="3" className="block w-full py-1 px-2 rounded-md shadow-sm outline-none duration-300 focus:bg-gray-300 bg-gray-600 focus:text-gray-600 text-gray-200"></textarea>
                            </label>

                            <button type="submit" className='self-center text-lg flex justify-center items-center gap-2 border border-gray-400 text-gray-700 px-10 ml-2 cursor-pointer hover:bg-gray-400 hover:text-white duration-300 mt-3 py-2 rounded-lg hover:shadow-lg  mb-1'>Send <IoPaperPlaneOutline className='text-xl' /></button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;