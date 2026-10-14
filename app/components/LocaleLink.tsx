"use client";
// A next/link that keeps the reader inside their language.
//
// Server components (Footer, RelatedContent, the destination and experience cards)
// render in every language but cannot read the locale from a hook, and their hrefs
// are plain strings evaluated while rendering -- which is exactly how a /ja page
// ended up with English links. This wrapper resolves the locale from the same
// LangProvider context the <En>/<Ja>/<Ko>/<Zh> blocks use (which the root layout
// seeds from the URL, so the SERVER-rendered href is already correct), and prefixes
// the href with it.

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { localeHref } from "@/lib/locale-href";
import { useLang } from "./LangBlocks";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  children?: ReactNode;
};

export default function LocaleLink({ href, children, ...rest }: Props) {
  const { lang } = useLang();
  return (
    <Link href={localeHref(lang, href)} {...rest}>
      {children}
    </Link>
  );
}
