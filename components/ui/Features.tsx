import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  image: {
    src: ImageType;
    alt: string;
  };
  /**
   * @description Title
   */
  title: string;
  /**
   * @description Description and Image alt text
   */
  description: string;
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights(
  { features }: Props,
) {
  return (
    <div class="container min-h-[280px] p-6 sm:px-0 sm:py-10">
      <div class="border-base-200 border border-solid">
        <div class="flex flex-col justify-evenly divide-y divide-base-200 mx-6 sm:flex-row sm:divide-y-0 sm:divide-x sm:mx-0 sm:my-10">
          {features.map(({ image, title, description }) => (
            <div class="flex flex-row gap-4 py-6 sm:flex-col sm:py-0 sm:px-8">
              {image && (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={120}
                  height={120}
                />
              )}

              <div class="flex flex-col gap-2">
                <span class="font-medium text-xl">{title}</span>
                <span class="text-sm">{description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureHighlights;
