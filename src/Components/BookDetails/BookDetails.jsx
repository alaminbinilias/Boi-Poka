import React from 'react';
import { useParams } from 'react-router';
import books from "./../../Images/pngwing 1.png"
const BookDetails = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <div className='mt-15 grid grid-cols-1 mx-2 lg:mx-0 lg:grid-cols-2 gap-10'>
                <div className='bg-[#f2f2f2] rounded-2xl  flex items-center justify-center'>
                    <img src={books} className='w-100 p-5' alt="" />
                </div>
                <div className='mb-20'>
                    <h3 className='font-semibold text-4xl'>The Catcher in the Rye</h3>
                    <p className='font-medium text-xl'>By : Awlad Hossain</p>
                    <div className='border-b-2 mt-5 border-gray-200'>

                    </div>
                    <p className='mt-3 text-xl text-gray-700 font-medium'>Fiction</p>

                    <div className='border-b-2 mt-3 border-gray-200'>

                    </div>

                    <p className='mt-5 text-justify'><span className='font-bold'>Review:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero porro vero, optio sequi ducimus in quia reprehenderit excepturi corporis voluptatum illum minima maiores, esse perferendis repudiandae est commodi dicta explicabo! Totam asperiores sequi dolores mollitia dolorem repellendus aspernatur fugit ad placeat! Ratione, eum dolor doloremque hic dolore vel ad enim quia dolorum nam odit neque deserunt amet sequi sint illum! Eveniet ut autem, officia possimus ipsa veritatis mollitia nemo molestiae incidunt, doloribus dignissimos delectus culpa adipisci soluta, at voluptatum? Blanditiis magnam itaque amet aspernatur? Suscipit rem nobis obcaecati saepe animi doloribus, recusandae laudantium omnis optio. Sed sapiente fuga voluptas reiciendis.</p>

                    <div className='flex gap-4 items-center mt-5'>
                        <p><span className='font-bold'>Tags:</span></p>
                        <p className='bg-[#f4fcf2] text-[#22bf0a] px-5 py-1 rounded-2xl'>#Young Adult</p>
                        <p className='bg-[#f4fcf2] text-[#22bf0a] px-5 py-1 rounded-2xl'>#Identity</p>
                    </div>
                    <div className='border-b-2 mt-5 border-gray-200'>

                    </div>

                    <div className='mt-5 flex gap-6'>
                        <div>
                            <p className='mb-3 font-medium text-md text-gray-500'>Number of Pages:</p>
                            <p className='mb-3 font-medium text-md text-gray-500'>Publisher</p>
                            <p className='mb-3 font-medium text-md text-gray-500'>Year of Publisher</p>
                            <p className='mb-3 font-medium text-md text-gray-500'>Rating</p>
                        </div>
                        <div>
                            <p className='mb-3 font-medium text-md'>281</p>
                            <p className='mb-3 font-medium text-md'>J.B Lippincott & Co.</p>
                            <p className='mb-3 font-medium text-md'>1960</p>
                            <p className='mb-3 font-medium text-md'>4.8</p>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;