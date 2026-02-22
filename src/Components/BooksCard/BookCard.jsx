import React from 'react';
import star from '../../Images/Vector (2).png'
import books from "../../Images/pngwing 1.png"
const BookCard = ({ book }) => {
    //console.log(book);
    return (
        <div>
            <div>
                <div className='border-2 border-gray-300 rounded-lg'>
                    <div className='bg-[#f2f2f2] m-5 p-10 rounded-lg'>
                        <img src={book.image} className='w-40 h-60 mx-auto' alt="" />
                    </div>
                    <div className='m-5'>

                        <div className='flex gap-4 mb-4'>
                            <p className='bg-[#f4fcf2] text-[#22bf0a] px-5 py-1 rounded-2xl'>{book.tags[0]}</p>
                            <p className='bg-[#f4fcf2] text-[#22bf0a] px-5 py-1 rounded-2xl'>{book.tags[1]}</p>
                        </div>

                        <h3 className='font-semibold text-[1.5rem] mb-3'>{book.bookName}</h3>
                        <p className='text-[1.2rem] font-mono pb-4 border-b-2 border-dashed border-gray-300'>By : {book.author}</p>
                    </div>
                    <div className='flex justify-between m-5 items-center'>
                        <div>
                            <p className='font-mono text-[1.2rem]'>{book.category}</p>
                        </div>
                        <div className='flex gap-2 font-mono'>
                            <p>{book.rating}</p>
                            <div>
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;