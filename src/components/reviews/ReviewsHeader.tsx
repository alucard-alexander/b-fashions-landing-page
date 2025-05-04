
import ReviewStars from "./ReviewStars";

const ReviewsHeader = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#530c2c]">Customer Reviews</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Hear what our customers have to say about their experiences with सारीKurta
      </p>
      <div className="flex justify-center items-center mt-4">
        <ReviewStars rating={5} size="lg" />
        <span className="ml-2 text-lg font-semibold text-gray-800">4.8 out of 5</span>
      </div>
      <p className="text-gray-700 mt-1">Based on 243 reviews</p>
    </div>
  );
};

export default ReviewsHeader;
