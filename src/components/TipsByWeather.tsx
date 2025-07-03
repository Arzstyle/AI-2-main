import React, { useEffect, useState } from 'react';
import { fetchGeminiAdvice } from '../services/geminiAPI';
import { WeatherData } from '../types/weather';

interface Props {
  weather: WeatherData | null;
}

const WeatherTips: React.FC<Props> = ({ weather }) => {
  const [tips, setTips] = useState<string>('Memuat tips perawatan...');

  useEffect(() => {
    if (weather) {
      fetchGeminiAdvice(weather.condition, weather.temperature)
        .then(setTips)
        .catch(() => setTips("Tidak dapat mengambil tips saat ini."));
    }
  }, [weather]);

  return (
    <div className="card p-4">
      <h3 className="font-semibold text-lg mb-2">Tips Perawatan Tanaman</h3>
      <pre className="text-gray-700 whitespace-pre-wrap">{tips}</pre>
    </div>
  );
};

export default WeatherTips;
