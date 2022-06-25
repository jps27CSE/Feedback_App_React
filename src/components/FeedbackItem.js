import { useState } from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ item, handleDelete }) => {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example");

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes
          onClick={() => {
            handleDelete(item.id);
          }}
          color="purple"
        />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
