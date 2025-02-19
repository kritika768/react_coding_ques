import { FaStar } from "react-icons/fa";
import { useState } from "react";
const Star = () => {
  const [rating, setRating] = useState(0);
  const [overRating,setOverRating] = useState(0)

  const clickHandler = (index) => {
    setRating(index + 1);
    console.log(index, "clicked");
  };

  const onMouseOverHandler = (index) =>{
      setOverRating(index+1);
  }

  const onMouseLeaveHandler = () =>{
      setOverRating(0);
  }

  return (
    <>
      <div>
        {[...Array(5)].map((_, index) => (
          <FaStar
            style={{
              height: "90px",
              width: "90px",
              color: index < (rating || overRating) ? "yellow" : "grey",
              cursor: "pointer"
            }}
            
            key={index}
            onClick={() => {
              clickHandler(index);
            }}
            onMouseOver={()=>{onMouseOverHandler(index)}}
            onMouseLeave={() =>{onMouseLeaveHandler(index)}}
          />
        ))}
        <span>{rating > 0 && <p>You Rated {rating} Star Rating</p>}</span>
      </div>
    </>
  );
};

export default Star;
