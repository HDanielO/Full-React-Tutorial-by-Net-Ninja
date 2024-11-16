import { useState } from "react";

const Home = () => {
  const [firstName, setName] = useState("Dave");
  const [age, setAge] = useState(25);
  const handleClick = (age) => {
    // firstName = "Andrew";
    setName("Andrew");
    setAge(age);
  };

  //So I noticed that you can't use the normal 'document.queryselector().addEventListener kind of way because we'll be referencing a DOM element in out queryselectot() method that we have not yet passed..because it comes before the return which passes the elements into tht DOM

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        {firstName} is {age} years old
      </p>
      <button onClick={() => handleClick(20)}>CLICK HERE</button>
    </div>
  );
};

export default Home;
