export {};

// record型

type kantoChiho = 'Tokyo' | 'Chiba' | 'Kanagawa' | 'Saitama' | 'Ibaraki' | 'Tochigi' | 'Gunma';

type Covid18InfactionInfo = {
  kanji_name: string;
  confiremed_cases: number;
};

// データを繰り返して定義するのは面倒くさい。
// const covid19Japan:{
//   Tokyo: Covid18InfactionInfo;
//   Chiba: Covid18InfactionInfo;
//   Torrori: Covid18InfactionInfo;
// } = {
//   Tokyo: { kanji_name: '東京', confiremed_cases: 1960},
//   Chiba: { kanji_name: '千葉', confiremed_cases: 249},
//   Tottori: { kanji_name: '鳥取', confiremed_cases: true},
// }

// このようにrecordを使ってまとめてかける
const covid19Japan: Record<kantoChiho, Covid18InfactionInfo> = {
  Tokyo: { kanji_name: '東京', confiremed_cases: 1960},
  Chiba: { kanji_name: '千葉', confiremed_cases: 249},
  // Tottori: { kanji_name: '鳥取', confiremed_cases: true},
}

