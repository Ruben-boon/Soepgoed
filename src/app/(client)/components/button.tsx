import React from "react";
import Link from "next/link";
import { Button } from "../interfaces/interfaces";
import spatula from "../../../../public/spatulaIcon.svg";
import arrow from "../../../../public/arrow.svg";


interface ButtonProps {
  content: Button;
}

const Button: React.FC<ButtonProps> = ({ content }) => {

  return (
    <>
      {content.buttonLink && content.buttonText && (
        <Link
          href={`/${content.buttonLink}`}
          className={`${"button"} ${content.buttonVariant}`}
        >
          {content.buttonText}
          {content.buttonVariant === "secondary" && (
            <img src={spatula.src}></img>
          )}
          {content.buttonVariant === "primary" && (
            <img src={arrow.src}></img>
          )}
        </Link>
      )}
    </>
  );
};

export default Button;
