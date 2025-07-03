// src/services/getGeminiWeatherTips.ts

export async function getGeminiWeatherTips(weather: string, time: string): Promise<string> {
  const timeOfDay = time; // Expecting 'pagi' | 'siang' | 'malam'

  const tipsByWeather: Record<string, Record<string, string>> = {
    sunny: {
      pagi: `A sunny morning like this is perfect for watering your plants. The temperature is still cool, allowing the roots to absorb the water properly. You can also check the soil condition, and if it seems too dry, add mulch to help retain moisture throughout the day.`,

      siang: `During a hot afternoon like this, it's best to avoid watering your plants as the water will quickly evaporate. Instead, you can check the soil’s humidity and lightly mist the leaves to freshen them up—just don’t overdo it.`,

      malam: `After a sunny day, your plants might feel tired from all the sunlight. You can check the leaves, clean up any weeds or insects that may have appeared, and prepare the plants for the next morning with light care.`,
    },

    rainy: {
      pagi: `A rainy morning means the soil is already wet enough, so you don’t need to water your plants again. What’s important is to ensure the pot isn’t flooded and the roots don’t rot. If the rain isn’t too heavy, you can apply a light liquid fertilizer.`,

      siang: `A rainy afternoon can make plants prone to overwatering. Check for signs like yellowing leaves, and make sure the pot’s drainage is working well so water doesn’t pool. If it’s cloudy, try moving the plant somewhere it can still get light.`,

      malam: `A humid night after rain can cause root rot or slimy leaves. Dry the bottom of the pot and clean the leaves from splashed soil. Don’t let the plant stay too moist overnight.`,
    },

    cloudy: {
      pagi: `A cloudy morning is a good time to water your plants normally, but make sure not to overdo it. Place the plants near a window to get natural light and apply a light foliar fertilizer to keep them healthy.`,

      siang: `On a cloudy afternoon, the room may become dim. Use additional lighting if needed and ensure air circulation is adequate. Gently wipe off overly damp leaves to prevent mold.`,

      malam: `A cloudy night tends to be humid. Carefully clean the leaves and ensure the pot isn’t too wet. If excess moisture happens frequently, consider switching to a more porous growing medium.`,
    },

    windy: {
      pagi: `A windy morning can damage young plants. Make sure they’re not directly hit by wind and use stakes if necessary. Wind can dry out the soil quickly, so add mulch to help retain moisture.`,

      siang: `Wind in the afternoon can dry the topsoil without drying the inner part. So avoid overwatering. Check if any leaves are torn or damaged from the wind.`,

      malam: `If it’s windy at night, protect small plants from the cold gusts. Make sure pots won’t tip over easily, and avoid repotting while the wind is strong.`,
    },

    clear: {
      pagi: `A clear and sunny morning is the best time to water your plants. Use room temperature water so the roots aren’t shocked, and loosen the soil so the water can absorb well.`,

      siang: `A bright afternoon isn’t ideal for watering. Wait until late afternoon or the next morning. If the sun is too intense, consider providing temporary shade to prevent sunburn on your plants.`,

      malam: `A clear night should be used for light plant care. Don’t water the plants as it may lead to excess moisture. Instead, clean the surrounding area of pests or nighttime insects.`,
    },
  };

  const tip = tipsByWeather[weather]?.[timeOfDay];

  return tip ?? 'Tips are not available for this weather and time.';
}
