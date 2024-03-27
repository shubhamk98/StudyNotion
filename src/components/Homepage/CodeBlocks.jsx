/* eslint-disable react/prop-types */
import CtaButton from "../Common/CtaButton";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div
      className={`flex ${position} my-20 justify-between flex-col`}
    >
      {/* left part */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
        {heading}
        <div className="text-richblack-300 text-sm md:text-base font-bold w-[85%] -mt-3">
          {subheading}
        </div>

        <div className="flex gap-4 mb-4">
          <CtaButton
            active={ctabtn1.active}
            linkto={ctabtn1.linkto}
            text={ctabtn1.text}
          />

          <CtaButton
            active={ctabtn2.active}
            linkto={ctabtn2.linkto}
            text={ctabtn2.text}
          />
        </div>
      </div>

      {/*Right part*/}
      <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
        {backgroundGradient}
        <div className="text-center flex flex-col w-[10%] select-none text-richblack-400 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
        </div>

        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
            style={{ whiteSpace: "pre-line", display: "block" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
