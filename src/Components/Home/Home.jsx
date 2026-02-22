import React from 'react';
import Banner from '../Banner/Banner';
import BookSection from '../BookSection/BookSection';

const BooksData=fetch('public/Data/Data.json').then(res=>res.json());
//console.log(BooksData);

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookSection BooksData={BooksData}></BookSection>
        </div>
    );
};

export default Home;