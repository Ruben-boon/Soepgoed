export interface BlockProps {
  heading?: string;
  paragraph?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonGroup?: Button;
  buttonGroupTwo?: Button;
  image?: boolean;
  textPosition?: "textLeft" | "textRight" | "textCenter";
}

export interface Button {
  buttonLink?: string;
  buttonText?: string;
  buttonVariant?: "primary" | "outline" | "secondary";
  buttonToggle?: Boolean;
}

export interface PostProps {
  _key?: string;
  heading?: string;
  imageSrc?: string;
  imageAlt?: string;
  content?: [];
  _createdAt?: string;
}
