
import ReviewStars from "./ReviewStars";

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    location: string;
    rating: number;
    image: string;
    text: string;
    product: string;
    date: string;
  };
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-bold text-gray-900">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.location}</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <ReviewStars rating={review.rating} size="sm" />
        <span className="ml-2 text-sm text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-700 mb-3">{review.text}</p>
      <div className="text-sm text-[#c6576f] font-medium">
        Product: {review.product}
      </div>
    </div>
  );
};

export default ReviewCard;
