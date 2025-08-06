import { Button } from "@/Components/ui/button";
import { FileDown } from "lucide-react";
import { Link, useNavigate } from "react-router";
import InvoiceCard from "./Invoice/InvoiceCard";
import { Progress } from "@/Components/ui/progress";
import { useEffect, useState } from "react";

const EnrolledClassCard = ({ course }) => {
  const { _id, image, classTitle, instructor, paymentStatus } = course;
  const navigate = useNavigate();
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(10), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border shadow-sm bg-white">
      {/* Course Image */}
      <img
        src={image}
        alt={classTitle}
        className="w-32 h-20 object-cover rounded-md"
      />

      {/* Info & Actions */}
      <div className="flex-1">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800">{classTitle}</h3>

        {/* Instructor Name */}
        <p className="text-sm text-gray-600 mt-1">By: {instructor?.name}</p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4 items-center">
          {/* Progess Bar */}
          <Progress value={progress} className="w-[60%]" /> {progress}%

          <Link to={`/dashboard/my-classes/${_id}`}>
            <Button variant="outline" className={'bg-blue-500 text-white'}>View Course</Button>
          </Link>
          {/* <Link to={"/"}>
            <Button variant="outline">Go Home</Button>
          </Link> */}
          {paymentStatus === "pending" && (
            <Link to={"/"}>
              <Button variant="outline" onClick={() => alert("Coming Soon...")}>
                Pay Now
              </Button>
            </Link>
          )}
          {/* Download Invoice button */}
          {/* <div className="flex gap-2 items-center absolute right-0">
            <p>Invoice</p>
            <FileDown
              size={20}
              className="cursor-pointer"
              onClick={() => navigate("/invoice-view", { state: { course } })}
            />
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default EnrolledClassCard;
