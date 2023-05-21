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
        <div class="flex flex-col justify-evenly mx-6 sm:flex-row sm:mx-0 sm:my-10">
          {features.map(({ image, title, description }, index) => (
            <>
              <div class="transition ease-in-out hover:-translate-y-1 hover:scale-110 flex flex-row gap-4 py-6 sm:flex-col sm:py-0 sm:px-8">
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
              {index < features.length - 1 && (
                <hr class="h-[1px] sm:h-auto sm:w-[1px] bg-neutral-300 sm:ml-8 sm:mr-8 mt-4 sm:mt-0 mb-4 sm:mb-0" />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureHighlights;
