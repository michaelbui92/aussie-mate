// Aussie-english page — server component.
// The phrase data + category metadata pass as serializable props to the
// PhraseExplorer client island, which handles search, category filter,
// and flashcard review state.

import { phrases, type Phrase } from "@/lib/phrases";
import { En, Ko } from "@/components/LangBlocks";
import PhraseExplorer, { type PhraseCategory } from "@/components/PhraseExplorer";

const categories: PhraseCategory[] = [
  { value: "all", label: "All" },
  { value: "daily-life", label: "Daily Life", enLabel: "Daily Life", koLabel: "일상" },
  { value: "work", label: "Work", enLabel: "Work", koLabel: "직장" },
  { value: "food", label: "Food", enLabel: "Food & Drinks", koLabel: "음식" },
  { value: "sports", label: "Sports", enLabel: "Sports", koLabel: "스포츠" },
  { value: "social", label: "Social", enLabel: "Social", koLabel: "사교" },
  { value: "media", label: "Media", enLabel: "Media", koLabel: "미디어" },
];

export default function AussieEnglishPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En>Phrases</En>
          <Ko>표현</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          <En>Aussie English</En>
          <Ko>호주 영어</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>{phrases.length} Aussie phrases, decoded in English and Korean.</En>
          <Ko>{phrases.length}개의 호주 표현, 영어와 한국어로 해석.</Ko>
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <PhraseExplorer phrases={phrases} categories={categories} />
      </div>
    </div>
  );
}
