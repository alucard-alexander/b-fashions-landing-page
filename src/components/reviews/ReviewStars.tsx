
import { Star } from "lucide-react";

interface ReviewStarsProps {
  rating: number;
  totalStars?: number;
  size?: "sm" | "md" | "lg";
  showEmpty?: boolean;
}

const ReviewStars = ({ 
  rating, 
  totalStars = 5, 
  size = "md", 
  showEmpty = true 
}: ReviewStarsProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  const starClass = sizeClasses[size];

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          className={`${starClass} ${
            i < rating 
              ? "text-yellow-500 fill-yellow-500"
              : showEmpty ? "text-gray-300" : "hidden"
          }`}
        />
      ))}
    </div>
  );
};

export default ReviewStars;
