import Image from "next/image";
import React from "react";

type imageType = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string | undefined;
};

export const BrandLogo: React.FC<imageType> = (props) => (
  <Image
    src={props.src}
    alt={props.alt!}
    width={props.width}
    height={props.height}
    className={props.className}
  />
);
