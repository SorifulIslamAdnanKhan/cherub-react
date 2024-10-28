const CurveText = ({ fillColor, fillDrakColor }) => {
  return (
    <div>
      <svg width="150" height="150">
        <path
          className="fill-transparent"
          id="curve"
          d="M 75,75 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
        ></path>
        <text
          className={`transform origin-[50%_50%] animate-rotate ${fillColor} ${fillDrakColor}`}
        >
          <textPath href="#curve" startOffset="0" className="tracking-[5px]">
            Best Working Since 1997
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurveText;
