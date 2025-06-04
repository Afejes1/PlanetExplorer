import MercuryImg from './assets/mercury.svg';
import VenusImg from './assets/venus.svg';
import EarthImg from './assets/earth.svg';
import MarsImg from './assets/mars.svg';
import JupiterImg from './assets/jupiter.svg';
import SaturnImg from './assets/saturn.svg';
import UranusImg from './assets/uranus.svg';
import NeptuneImg from './assets/neptune.svg';

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
