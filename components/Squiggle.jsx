import withSetClassName from "use-utility-classes/react";

function Squiggle(props) {
  const squiggleClassName = props.setClassName("block w-24 m-0");

  return (
    <figure aria-hidden className={squiggleClassName}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 2">
        <g transform="translate(0, -5)">
          <path
            style={{
              clipRule: "nonzero",
              fill: "none",
              stroke: "#000",
              strokeWidth: 0.59999996,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            d="M1 6a1.77 1.77 0 0 1 2.5 0A1.767 1.767 0 0 0 6 6a1.77 1.77 0 0 1 2.5 0A1.767 1.767 0 0 0 11 6"
          />
        </g>
      </svg>
    </figure>
  );
}

export default withSetClassName(Squiggle);
