import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const page = readFileSync(new URL('../../app/cost-of-living/page.tsx', import.meta.url), 'utf8');
const metadata = readFileSync(new URL('../../app/lib/page-meta.ts', import.meta.url), 'utf8');

test('does not present unsupported quick-summary monthly budgets', () => {
  for (const value of ['$700–$1,200/month', '$1,200–$2,000/month', '$1,800–$2,800/month']) {
    assert.ok(!page.includes(value), `Unexpected budget: ${value}`);
  }
});

test('does not present an incomplete shared-room monthly total', () => {
  for (const value of ['monthlyRows', 'What a shared room actually costs', 'Total per month', '$1,790–$2,715']) {
    assert.ok(!page.includes(value), `Unexpected monthly total content: ${value}`);
  }
});

test('does not charge a rental bond registration fee and retains the bond', () => {
  for (const value of ['Rental bond fee (NSW Fair Trading)', '賃貸保証金の登録手数料', '租赁押金登记费', '임대 보증금 등록비']) {
    assert.ok(!page.includes(value), `Unexpected bond fee: ${value}`);
  }
  assert.ok(page.includes('Bond (4 weeks rent)'));
  assert.ok(page.includes('cost: "4 weeks rent"'));
});

test('retains all six category tables and the other cost rows', () => {
  for (const category of ['Rent & Housing', 'Transport', 'Groceries & Food', 'Phone & Internet', 'Utilities & Bills', 'Health Insurance']) {
    assert.ok(page.includes(`title: "${category}"`), `Missing category: ${category}`);
  }
  assert.equal((page.match(/\{ en: "[^"]+", ja: [^\n]+ cost: /g) ?? []).length, 31);
  assert.ok(page.includes('{categories.map((cat, i) => ('));
});

test('omits unsupported electricity, water and private GP cost rows', () => {
  for (const label of [
    'Electricity (1 person, apartment)', '電気代（1人、アパート）', '电费（1人，公寓）', '전기세 (1인, 아파트)',
    'Water (apartment, billed quarterly)', '水道代（アパート、四半期ごとの請求）', '水费（公寓，按季度计费）', '수도세 (아파트, 분기별)',
    'GP visit (private, no Medicare)', 'GP受診（自費、Medicareなし）', '全科医生就诊（自费，无Medicare）', 'GP 방문 (개인, 메디케어 없음)',
  ]) {
    assert.ok(!page.includes(label), `Unexpected cost row: ${label}`);
  }
});

test('omits the Aldi price-comparison and unrestricted Opal cap tips in all languages', () => {
  for (const claim of [
    "Shop at Aldi for groceries", '食料品はAldiで', '在Aldi购买食品杂货', '장보기는 Aldi에서',
    'Use the Opal card weekly cap', 'Opalカードの週間上限を活用', '善用Opal卡每周上限', 'Opal 카드 주간 상한선 활용',
  ]) {
    assert.ok(!page.includes(claim), `Unexpected tip: ${claim}`);
  }
});

test('search descriptions do not promise budgets removed from the guide', () => {
  const block = metadata.match(/"cost-of-living": \{([\s\S]*?)\n  \},/);
  assert.ok(block, 'missing cost-of-living metadata');
  for (const lang of ['en', 'ja', 'zh', 'ko']) {
    const row = block[1].match(new RegExp(`\\b${lang}: \\{[^\\n]*?description: ("(?:[^"\\\\]|\\\\.)*")`));
    assert.ok(row, `missing ${lang} description`);
    const description = JSON.parse(row[1]);
    assert.equal((description.match(/[.。]/g) ?? []).length, 1, `${lang} description contains stale second sentence`);
  }
});

test('omits the unverified real-prices introduction in all languages', () => {
  for (const claim of [
    'Real prices for rent, food, transport, and bills', '家賃、食費、交通費、光熱費の実際の価格',
    '房租、食物、交通和账单的真实价格', '임대료, 식비, 교통비, 공과금의 실제 가격입니다',
  ]) {
    assert.ok(!page.includes(claim), `Unexpected introduction: ${claim}`);
  }
});
