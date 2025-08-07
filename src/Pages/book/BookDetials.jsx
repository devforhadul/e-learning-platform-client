import { BookDashed, BookKey } from "lucide-react";
import React from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import bookCover from "../../assets/Book/book_cover.jpg";
import { useCart } from "@/Providers/CartProvider";
import toast from "react-hot-toast";

export default function BookDetials() {
  const { id } = useParams();
  const { state: bookData } = useLocation();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleCart = () => {
    // const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // const alreadyExistCart = existingCart.some(
    //   (item) => item?.title === bookData?.title
    // );
    // if (!alreadyExistCart) {
    //   const updateCart = [...existingCart, bookData];
    //   localStorage.setItem("cart", JSON.stringify(updateCart));
    // } else {
    //   alert("Already add in cart");
    // }

    addToCart(bookData);
    toast.success("Cart Add successfully")
    navigate("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Book Cover - Larger and centered */}
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={bookCover}
              alt={bookData?.title || "Book cover"}
              className="w-full h-90 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            {/* Optional badge */}
            {bookData?.bestseller && (
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                Bestseller
              </div>
            )}
          </div>
        </div>

        {/* Book Info - More detailed */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {bookData?.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              by {bookData?.author || "Unknown Author"}
            </p>

            {/* Rating with stars */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.floor(bookData?.rating || 0)
                        ? "fill-current"
                        : "stroke-current fill-none"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-700">
                {bookData?.rating?.toFixed(1) || "0.0"} (
                {bookData?.reviewCount || 0} reviews)
              </span>
            </div>
          </div>

          {/* Price section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-baseline mb-2">
              <span className="text-3xl font-bold text-blue-600">
                ${bookData?.price?.toFixed(2) || "0.00"}
              </span>
              {bookData?.originalPrice && (
                <span className="ml-2 text-gray-500 line-through">
                  ${bookData.price.toFixed(2)}
                </span>
              )}
            </div>
            {bookData?.inStock ? (
              <p className="text-green-600 font-medium">
                In Stock (Only {bookData?.stockCount} left)
              </p>
            ) : (
              <p className="text-red-600 font-medium">Out of Stock</p>
            )}

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCart}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Add to Cart
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Read Book
              </button>
            </div>
          </div>

          {/* Details section */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Description</h3>
              <p className="text-gray-700 mt-1">
                {bookData?.description || "No description available."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900">Details</h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>
                    <span className="font-medium">Category:</span>{" "}
                    {bookData?.category || "-"}
                  </li>
                  <li>
                    <span className="font-medium">Pages:</span>{" "}
                    {bookData?.pageCount || "-"}
                  </li>
                  <li>
                    <span className="font-medium">Language:</span>{" "}
                    {bookData?.language || "-"}
                  </li>
                  <li>
                    <span className="font-medium">ISBN:</span>{" "}
                    {bookData?.isbn || "-"}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Publisher</h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>
                    <span className="font-medium">Published:</span>{" "}
                    {bookData?.publishDate || "-"}
                  </li>
                  <li>
                    <span className="font-medium">Publisher:</span>{" "}
                    {bookData?.publisher || "-"}
                  </li>
                  <li>
                    <span className="font-medium">Edition:</span>{" "}
                    {bookData?.edition || "-"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
