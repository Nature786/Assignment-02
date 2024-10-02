export default function Home() {
  return (
    <>
      {/* Below Code Is With CSS */}
      <div className="homeContainer">
        <div className="childContainer">
         Hello,
          <br />This is my Profile.
         Iam <span className="blueColor">Rozina Aziz.</span>
          <br />Im Software Developer.
        </div>
        <div className="childContainer"></div>
      </div>
      <br />
      <br /> 
      {/* Below Code Is With Tailwind */}
      <div className="flex justify-between items-center">
        <div className="w-fit h-[230px] m-[30px] text-[60px] font-black">
        Hello,
        
          <br />This is my Profile.
          Iam <span className="blueColor">Rozina Aziz.</span>
          <br />Im Software Developer.
        </div>
        <div className=""></div>
      </div>
    </>
  );
}