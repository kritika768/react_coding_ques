import { useState } from "react";

const Meditation = () => {
  const [count, setCount] = useState(0);
  const [text,setText] = useState("")

  const clickHandler = () =>{
      setCount(count+1);
      setText(prevText => prevText + " राधे राधे")
  }

  const resetHandler = () =>{
      setCount(0);
      setText("");
  }
  return (
    <>
      <button
        style={{
          backgroundColor: "orange",
          borderColor: "orange",
          padding: "10px",
          color: "whitesmoke",
          fontWeight:"500",
          borderRadius:"7px"

        }}
        onClick = {() => clickHandler()}
      >
        Radhe Radhe
      </button>
      <div>Chant Count {count}</div>
      <button onClick={() => resetHandler()}>Reset</button>
      <div>{text}</div>
    </>
  );
};

export default Meditation;
