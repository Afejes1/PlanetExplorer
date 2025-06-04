/** URLs point to public domain images hosted by NASA's Solar System website. */
const MercuryImg =
  'https://solarsystem.nasa.gov/system/feature_items/images/82_mercury_new.png';
const VenusImg =
  'https://solarsystem.nasa.gov/system/feature_items/images/143_Venus-800x600.jpg';
const EarthImg =
  'https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png';
const MarsImg =
  'https://solarsystem.nasa.gov/system/feature_items/images/705_mars.png';
const JupiterImg =
  'https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png';
const SaturnImg =
  'https://solarsystem.nasa.gov/system/feature_items/images/147_saturn_1600x900.jpg';
const UranusImg =
  'https://solarsystem.nasa.gov/system/feature_items/images/1528_Uranus2.jpg';
const NeptuneImg =
  'https://solarsystem.nasa.gov/system/feature_items/images/1581_neptune.jpg';

export const PLANET_ORDER = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
] as const;

export const PLANET_IMAGES: Record<string, string> = {
  Mercury: MercuryImg,
  Venus: VenusImg,
  Earth: EarthImg,
  Mars: MarsImg,
  Jupiter: JupiterImg,
  Saturn: SaturnImg,
  Uranus: UranusImg,
  Neptune: NeptuneImg,
};

export const PLANET_FACTS: Record<string, string> = {
  Mercury: 'Mercury is the smallest planet and closest to the Sun.',
  Venus: 'Venus has a thick, toxic atmosphere that traps heat.',
  Earth: 'Earth is the only planet known to support life.',
  Mars: 'Mars is often called the Red Planet.',
  Jupiter: 'Jupiter is the largest planet in our solar system.',
  Saturn: 'Saturn is known for its prominent ring system.',
  Uranus: 'Uranus rotates on its side relative to its orbit.',
  Neptune: 'Neptune is the most distant planet from the Sun.',
};
