"use client";

import { Fragment, type ReactNode } from "react";
import { useLang } from "@/components/LangBlocks";
import type { Lang } from "@/lib/locale";
import { bulk, groupParagraphs, splitSentences } from "@/lib/text-shape";

/**
 * Reading-shape components. Both exist for one reason: a wall of text is the single biggest thing that
 * makes a guide look unreadable on a phone, and the site had six of them (108 words at the top of /faq
 * and again on the homepage, 79 on the Bondi page, 66 on transport, 62 three times on beaches).
 *
 * The important constraint: this repo carries four languages inline, and the Korean must not be
 * re-authored (nobody here can verify new Hangul). So neither component writes any copy. They take the
 * text that already exists in each language and change only its SHAPE - a lead sentence, then one fact
 * per line. Sentence boundaries are language-aware: CJK ends on 。！？, English and Korean on . ! ?
 * (with decimals and the usual abbreviations protected, because "$5.60" is not a sentence).
 *
 * If a block has fewer than three sentences there is nothing worth splitting, and it renders as a
 * plain paragraph rather than a lead with a lonely bullet under it.
 */

function pick(lang: Lang, en: string, ja?: string, zh?: string, ko?: string): string {
  if (lang === "ko") return ko ?? en;
  if (lang === "ja") return ja ?? en;
  if (lang === "zh") return zh ?? en;
  return en;
}

/**
 * A long paragraph, rendered as two or three shorter ones at the same sentence boundaries.
 * `className` goes on every paragraph so the page's type styling is unchanged.
 */
export function SplitParagraph({
  en,
  ja,
  zh,
  ko,
  className,
}: {
  en: string;
  ja?: string;
  zh?: string;
  ko?: string;
  className?: string;
}) {
  const { lang } = useLang();
  const text = pick(lang, en, ja, zh, ko);
  // Grouping lives in lib/text-shape so the server-rendered destination pages can use the same rules.
  const chunks = groupParagraphs(text, lang);

  return (
    <>
      {chunks.map((c, i) => (
        <p key={i} className={className}>
          {c}
        </p>
      ))}
    </>
  );
}

/**
 * Just the first sentence of an answer.
 *
 * The homepage shows three questions as link cards, and it printed each answer in full - 108 words of
 * visa detail inside a third-of-a-screen card. The card's job is to make the question recognisable;
 * the answer belongs on /faq.
 */
export function FaqLead({
  en,
  ja,
  zh,
  ko,
  className,
}: {
  en: string;
  ja?: string;
  zh?: string;
  ko?: string;
  className?: string;
}) {
  const { lang } = useLang();
  const text = pick(lang, en, ja, zh, ko);
  const [lead] = splitSentences(text, lang);
  return <p className={className}>{lead ?? text}</p>;
}

/**
 * A FAQ answer: the first sentence as the answer, the rest as one fact per line.
 *
 * This is also the shape Google lifts for a featured snippet - a direct answer followed by supporting
 * bullets - which is why it earns more than readability alone.
 */
export function FaqAnswer({
  en,
  ja,
  zh,
  ko,
  className,
}: {
  en: string;
  ja?: string;
  zh?: string;
  ko?: string;
  className?: string;
}): ReactNode {
  const { lang } = useLang();
  const text = pick(lang, en, ja, zh, ko);
  const sentences = splitSentences(text, lang);

  if (sentences.length < 3) {
    return <p className={className}>{text}</p>;
  }

  const [lead, ...rest] = sentences;

  // Fold anything very short into its neighbour so we do not print one-word bullets.
  const bullets: string[] = [];
  for (const s of rest) {
    if (bullets.length && bulk(s, lang) < 5) bullets[bullets.length - 1] += ` ${s}`;
    else bullets.push(s);
  }

  return (
    <Fragment>
      <p className={`${className ?? ""} font-medium text-stone-700 dark:text-stone-300`}>{lead}</p>
      {bullets.length > 0 && (
        <ul className="mt-3 space-y-2 text-stone-600 dark:text-stone-400">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sunset" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
