export async function fetchGeminiAdvice(weather: string, temperature: number): Promise<string> {
  const time = getTimeOfDay();
  const normalizedWeather = normalizeWeatherCondition(weather);

  const tipsByWeather: Record<string, Record<string, string>> = {
    sunny: {
      pagi: `
- Siram tanaman lebih banyak di pagi hari untuk menghindari penguapan siang hari.
- Periksa tanah, jika terlalu kering tambahkan mulsa.
- Pindahkan tanaman pot ke tempat yang sedikit teduh jika terlalu terik.
      `,
      siang: `
- Hindari menyiram di tengah hari karena air cepat menguap.
- Cek kelembaban tanah secara manual.
- Semprotkan daun dengan air bila perlu, tapi jangan terlalu sering.
      `,
      malam: `
- Cek daun untuk kemungkinan layu akibat panas siang hari.
- Bersihkan area sekitar tanaman dari gulma dan serangga.
- Rencanakan penyiraman esok pagi jika hari tetap panas.
      `,
    },

    rainy: {
      pagi: `
- Kurangi frekuensi penyiraman, karena tanah sudah basah alami.
- Periksa pot tanaman agar air tidak menggenang.
- Gunakan pupuk cair ringan jika tidak turun hujan deras.
      `,
      siang: `
- Perhatikan tanda-tanda overwatering seperti daun menguning.
- Pindahkan tanaman ke area yang tetap mendapatkan cahaya jika mendung.
- Pastikan drainase berfungsi baik.
      `,
      malam: `
- Keringkan pot yang terlalu lembab atau berlendir.
- Periksa akar tanaman jika ada tanda pembusukan.
- Bersihkan dedaunan dari cipratan tanah basah.
      `,
    },

    cloudy: {
      pagi: `
- Siram tanaman seperti biasa, tapi jangan berlebihan.
- Letakkan tanaman dekat jendela untuk mendapatkan cahaya alami.
- Pupuk daun ringan dapat diberikan untuk pertumbuhan.
      `,
      siang: `
- Gunakan pencahayaan buatan jika ruangan terlalu redup.
- Cek suhu ruangan agar tidak terlalu lembab.
- Seka daun dari kelembaban berlebih.
      `,
      malam: `
- Bersihkan daun dengan lap lembut agar tidak tumbuh jamur.
- Periksa kelembaban tanah sebelum menyiram.
- Ganti pot bila terlalu sering basah.
      `,
    },

    windy: {
      pagi: `
- Pastikan tanaman tidak terkena angin langsung, bisa rusak.
- Gunakan penyangga untuk tanaman tinggi.
- Tambahkan lapisan mulsa agar tanah tidak cepat kering.
      `,
      siang: `
- Jangan menyiram terlalu banyak karena angin bisa mengeringkan permukaan tanah tapi bagian bawah masih basah.
- Periksa kerusakan daun akibat tiupan angin.
      `,
      malam: `
- Tutupi tanaman kecil dengan pelindung dari angin malam.
- Cek apakah pot stabil atau mudah roboh.
- Hindari mengganti media tanam saat angin kencang.
      `,
    },

    clear: {
      pagi: `
- Ini saat terbaik untuk menyiram tanaman.
- Gunakan air yang tidak terlalu dingin agar akar tidak kaget.
- Gemburkan tanah ringan agar air mudah meresap.
      `,
      siang: `
- Jangan menyiram di siang hari, tunggu sore atau besok pagi.
- Cek apakah tanaman butuh perlindungan dari sinar matahari langsung.
- Bersihkan pot dari debu yang menempel.
      `,
      malam: `
- Hindari menyiram saat malam agar tidak lembab berlebihan.
- Sediakan cahaya lampu tanaman jika dibutuhkan.
- Bersihkan area sekitar dari serangga malam.
      `,
    },
  };

  const tips = tipsByWeather[normalizedWeather]?.[time] ?? "Belum ada tips untuk kondisi cuaca ini.";
  return tips.trim();
}

function getTimeOfDay(): 'pagi' | 'siang' | 'malam' {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return 'pagi';
  if (hour >= 11 && hour < 18) return 'siang';
  return 'malam';
}

function normalizeWeatherCondition(condition: string): string {
  const text = condition.toLowerCase();
  if (text.includes("rain")) return "rainy";
  if (text.includes("cloud")) return "cloudy";
  if (text.includes("sun") || text.includes("clear")) return "sunny";
  if (text.includes("wind")) return "windy";
  return "clear"; // default fallback
}
