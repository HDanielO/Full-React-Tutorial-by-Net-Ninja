const Home = () => {
  const handleClickFirst = () => {
    console.log("test value ");
  };

  const handleClick = () => {
    console.log("test value 2 ");
  };

//So I noticed that you can't use the normal 'document.queryselector().addEventListener kind of way because we'll be referencing a DOM element in out queryselectot() method that we have not yet passed..because it comes before the return which passes the elements into tht DOM

  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClickFirst}>CLICK HERE</button>
      <button onClick={() => handleClick()}>CLICK HERE AGAIN</button>
    </div>
  );
};

export default Home;
