import CircleIcon from "@mui/icons-material/Circle";
import { useState,useEffect } from "react";
const TrafficLight = () => {
  const [light, setLight] = useState("red");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLight((prev) => {
//         if (prev === "red") return "green";
//         if (prev === "green") return "yellow";
//         return "red";
//       });
//     }, 3000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

useEffect(() => {

    const interval = setInterval(() =>{
        setLight((prev) =>{
            if(prev === "red") return "green";
            if(prev === "green") return "yellow";
            return "red";
        })
    },3000)
    effect
    return () => {
        clearInterval(interval);
    }
}, [])


  return (
    <>
      <h1>Traffic Light</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "130px",
            height: "320px",
            backgroundColor: "black",
            borderRadius: "10px",
          }}
        >
          <CircleIcon
            style={{
              color: light === "red" ? "red" : "gray",
              width: "100px",
              height: "100px",
            }}
          />
          <CircleIcon
            style={{
              color: light === "yellow" ? "yellow" : "gray",
              width: "100px",
              height: "100px",
            }}
          />
          <CircleIcon
            style={{
              color: light === "green" ? "green" : "gray",
              width: "100px",
              height: "100px",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default TrafficLight;
