import React from "react";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Button } from "../interfaces/interfaces";

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
