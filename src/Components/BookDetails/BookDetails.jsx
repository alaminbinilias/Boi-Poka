import { useLoaderData, useParams } from "react-router";


const BookDetails = () => {
  const { id } = useParams();
  const Data=useLoaderData();
  //console.log(Data);
  const indx=parseInt(id);
  //console.log(indx);
  const dta=Data.find(book=>book.bookId===indx);
  //console.log(dta);
  return (
    <div>
      <div className="mt-15 grid grid-cols-1 mx-2 lg:mx-0 lg:grid-cols-2 gap-10">
        <div className="bg-[#f2f2f2] rounded-2xl  flex items-center justify-center">
          <img src={dta.image} className="w-100 p-5" alt="" />
        </div>
        <div className="mb-20 mx-3 lg:mx-0">
          <h3 className="font-semibold text-4xl">{dta.bookName}</h3>
          <p className="font-medium text-xl">By : {dta.author}</p>
          <div className="border-b-2 mt-5 border-gray-200"></div>
          <p className="mt-3 text-xl text-gray-700 font-medium">{dta.category}</p>

          <div className="border-b-2 mt-3 border-gray-200"></div>

          <p className="mt-5 text-justify">
            <span className="font-bold">Review:</span> {dta.review}
          </p>

          <div className="flex gap-4 items-center mt-5">
            <p>
              <span className="font-bold">Tags:</span>
            </p>
            {
              dta.tags.map(d=><p className="bg-[#f4fcf2] text-[#22bf0a] px-5 py-1 rounded-2xl">
              # {d}
            </p>)
            }
          </div>
          <div className="border-b-2 mt-5 border-gray-200"></div>

          <div className="mt-5 flex gap-6">
            <div>
              <p className="mb-3 font-medium text-md text-gray-500">
                Number of Pages:
              </p>
              <p className="mb-3 font-medium text-md text-gray-500">
                Publisher
              </p>
              <p className="mb-3 font-medium text-md text-gray-500">
                Year of Publisher
              </p>
              <p className="mb-3 font-medium text-md text-gray-500">Rating</p>
            </div>
            <div>
              <p className="mb-3 font-medium text-md">{dta.totalPages}</p>
              <p className="mb-3 font-medium text-md">{dta.publisher}</p>
              <p className="mb-3 font-medium text-md">{dta.yearOfPublishing}</p>
              <p className="mb-3 font-medium text-md">{dta.rating}</p>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex gap-2">
              <button className=" btn border-2 rounded-md cursor-pointer font-semibold border-gray-300 btn-black px-6">Read</button>
              <button className="btn bg-[#51b1c9] text-gray-200 px-5">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
