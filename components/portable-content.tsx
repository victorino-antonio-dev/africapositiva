import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { sanityImageUrl } from "@/lib/cms";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="mt-12 font-display text-3xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-9 font-display text-2xl font-semibold">{children}</h3>,
    normal: ({ children }) => <p className="mt-5 text-lg leading-8 text-stone-700">{children}</p>,
    blockquote: ({ children }) => <blockquote className="my-8 border-l-4 border-orange-500 pl-6 font-display text-xl font-semibold leading-8">{children}</blockquote>
  },
  list: {
    bullet: ({ children }) => <ul className="my-6 list-disc space-y-2 pl-6 text-stone-700">{children}</ul>,
    number: ({ children }) => <ol className="my-6 list-decimal space-y-2 pl-6 text-stone-700">{children}</ol>
  },
  marks: {
    link: ({ children, value }) => <a href={value?.href} className="font-semibold text-orange-700 underline" target="_blank" rel="noreferrer">{children}</a>
  },
  types: {
    image: ({ value }) => {
      const src = sanityImageUrl(value, 1400, 900);
      if (!src) return null;

      return (
        <figure className="my-10 overflow-hidden rounded-3xl bg-stone-100">
          <Image
            src={src}
            alt={value?.alt || ""}
            width={1400}
            height={900}
            className="h-auto w-full object-cover"
          />
          {value?.caption ? (
            <figcaption className="px-5 py-3 text-sm text-stone-600">{value.caption}</figcaption>
          ) : null}
        </figure>
      );
    }
  }
};

export function PortableContent({ value }: { value: unknown[] }) {
  return <PortableText value={value as never} components={components} />;
}
