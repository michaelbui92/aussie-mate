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
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-2">
            <En>Aussie English 🗣️</En>
            <Ko>호주 영어 🗣️</Ko>
          </h1>
          <p className="text-sm md:text-base text-eucalypt/60 dark:text-dark-muted/60">
            <En>{phrases.length} Aussie phrases, decoded in English and Korean</En>
            <Ko>{phrases.length}개의 호주 표현, 영어와 한국어로 해석</Ko>
          </p>
        </div>
      </section>

      <PhraseExplorer phrases={phrases} categories={categories} />
    </div>
  );
}
