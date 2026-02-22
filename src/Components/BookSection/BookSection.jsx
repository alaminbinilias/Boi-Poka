
import React, { Suspense, use } from 'react';
import BookCard from '../BooksCard/BookCard';
const BookSection = ({ BooksData }) => {

    const Book = use(BooksData);
    //console.log(Book);


    return (
        <div>
            <div className='text-center mt-10 lg:mt-17'>
                <h4 className='font-bold text-4xl'>Books</h4>
            </div>

            {/* Booksection */}

            <Suspense fallback={<h3>Loading...</h3>}>
                <div className='grid grid-cols-1 mt-15 mx-2 gap-3 lg:mx-0 md:grid-col-2 lg:grid-cols-3 lg:gap-5 '>

                    {
                        Book.map((book, index) => <BookCard key={index} book={book}></BookCard>)
                    }
                </div>
                {/* <BookCard></BookCard> */}
            </Suspense>
        </div>
    );
};

export default BookSection;