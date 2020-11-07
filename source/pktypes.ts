import Zet from 'zet';
import defense from "./typesDefense.json";
import offense from "./typesOffense.json";

export function Defense(type1: string, type2?: string) {
    if(isValidPokemonType(type1)) {
        const { strengths, weaknesses, immunes } = defense[type1];

        if (type2 && isValidPokemonType(type2)) {
            const { strengths: strengths2, weaknesses: weaknesses2, immunes: immunes2 } = defense[type2];
            const neutral = Zet.union( Zet.intersection(strengths, weaknesses2), Zet.intersection(strengths2, weaknesses));

            const combinedStrengths = Zet.union(new Zet(strengths), new Zet(strengths2));
            const combinedWeaknesses = Zet.union(new Zet(weaknesses), new Zet(weaknesses2));

            return { 
                strengths: Array.from(Zet.symmetricDifference(neutral, combinedStrengths)),
                weaknesses: Array.from(Zet.symmetricDifference(neutral, combinedWeaknesses)),
                immunes: Array.from(Zet.union(new Zet(immunes), new Zet(immunes2)))
            }
        } else {
            return {
                strengths,
                weaknesses,
                immunes
            }
        }
    }
    throw "Input is not a valid pokemon type.";
}

export function Offense(type) {
    if(isValidPokemonType(type)) {
        return offense[type];
    }
    throw "Input is not a valid pokemon type."
}



const PokemonTypes = new Zet([
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
])

const isValidPokemonType = (str: string):boolean => PokemonTypes.has(str.toLowerCase());