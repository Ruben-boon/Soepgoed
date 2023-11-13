import React from "react";
import Link from "next/link";
import { Button } from "../interfaces/interfaces";
import spatula from "../../../../public/spatulaIcon.svg"

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
        </Link>
      )}
    </>
  );
};

export default Button;
