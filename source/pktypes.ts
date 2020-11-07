import Zet from 'zet';
import defense from './typesDefense.json';
import offense from './typesOffense.json';

export function typeDefense(type1: string, type2?: string) {
	if (isValidPokemonType(type1)) {
		const {strengths, weaknesses, immunes} = defense[type1];

		if (type2 && isValidPokemonType(type2)) {
			const {strengths: strengths2, weaknesses: weaknesses2, immunes: immunes2} = defense[type2];
			const neutral = Zet.union(Zet.intersection(strengths, weaknesses2), Zet.intersection(strengths2, weaknesses));

			const combinedStrengths = Zet.union(new Zet(strengths), new Zet(strengths2));
			const combinedWeaknesses = Zet.union(new Zet(weaknesses), new Zet(weaknesses2));

			return {
				strengths: [...Zet.symmetricDifference(neutral, combinedStrengths)],
				weaknesses: [...Zet.symmetricDifference(neutral, combinedWeaknesses)],
				immunes: [...Zet.union(new Zet(immunes), new Zet(immunes2))]
			};
		}

		return {
			strengths,
			weaknesses,
			immunes
		};
	}

	throw new Error('Input is not a valid pokemon type');
}

export function typeOffense(type) {
	if (isValidPokemonType(type)) {
		return offense[type];
	}

	throw new Error('Input is not a valid pokemon type');
}

const PokemonTypes = new Zet([
	'normal',
	'fire',
	'water',
	'electric',
	'grass',
	'ice',
	'fighting',
	'poison',
	'ground',
	'flying',
	'psychic',
	'bug',
	'rock',
	'ghost',
	'dragon',
	'dark',
	'steel',
	'fairy'
]);

const isValidPokemonType = (string: string): boolean => PokemonTypes.has(string.toLowerCase());
