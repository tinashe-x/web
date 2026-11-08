import Image, { type ImageProps } from "next/image";
import { asset } from "@/lib/asset";

type Props = Omit<ImageProps, "src"> & {
  src: string;
};

/** next/image wrapper that respects NEXT_PUBLIC_BASE_PATH (GitHub Pages /web). */
export function AssetImage({ src, alt, ...props }: Props) {
  return <Image src={asset(src)} alt={alt} {...props} />;
}
