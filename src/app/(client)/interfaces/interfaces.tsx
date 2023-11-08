export interface BlockProps {
  heading?: string;
  paragraph?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonGroup?: Button;
  buttonGroupTwo?: Button;
  image?: boolean;
  textPosition?: "textLeft" | "textRight" | "textCenter";
  layout?: string;
  formFields?: [];
  content?: [];
  excludePost?: string;
  height?: string;
  container?: boolean;
  columns?: number;
  column1Content?: [];
  column2Content?: [];
  column3Content?: [];
}

export interface Button {
  buttonLink?: string;
  buttonText?: string;
  buttonVariant?: "primary" | "outline" | "secondary";
  buttonToggle?: Boolean;
}

export interface PostProps {
  _key: string;
  slug: string;
  heading?: string;
  imageSrc?: string;
  imageAlt?: string;
  content?: [];
  _createdAt?: string;
  excerpt?: string;
}
