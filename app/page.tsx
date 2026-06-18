import HomePage from "@/components/HomePage";
import type { Metadata } from "next";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo(
  {
    title: "AussieGuides — 호주 생활 가이드 (한국어/English)",
    description:
      "한국인 유학생과 워홀러를 위한 호주 생활 가이드. 오팔 카드, 은행 계좌, 세금 신고(TFN), 퇴직연금(Super), 부동산, 직장 문화, 호주 영어 슬랭까지 — 한국어와 영어로 정리했습니다.",
  },
  "/"
);

export default function Page() {
  return <HomePage />;
}
