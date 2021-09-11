import SvgDone from "@/icons/SvgDone";
import cn from "clsx";

function Step(props) {
  return (
    <div className="step w-full | flex flex-col items-center | relative">
      <div
        className="fc flex-col justify-center | click:scale | z-20"
        onClick={() => console.log(12)}
      >
        <p
          className={cn({
            "font-bold | mb-3": true,
            "text-[#BFBFBF]": !props.active && !props.active,
            "text-[#00DA4A]": props.active,
          })}
        >
          {props.title}
        </p>
        <div
          className={cn({
            "text-white rounded-full | w-12 h-12 fcc | text-xl font-bold inline-block | z-20": true,
            "bg-[#BFBFBF]": !props.active && !props.active,
            "bg-[#00DA4A]": props.active,
          })}
        >
          {props.completed ? <SvgDone className="h-3" /> : props.order}
        </div>
      </div>
      <style jsx>{`
        .step:after {
          content: "";
          position: absolute;
          z-index: 10;
          left: 50%;
          bottom: 25%;
          width: 100%;
          height: 5px;
          background-color: ${props.active || props.completed
            ? "#00da4a"
            : "#BFBFBF"};
        }
        .step:last-child:after {
          content: "";
          height: 0;
          width: 0;
        }
      `}</style>
    </div>
  );
}

export default Step;
