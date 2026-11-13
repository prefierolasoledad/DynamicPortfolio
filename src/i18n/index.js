import en from "./dictionaries/en";
import hi from "./dictionaries/hi";
import jp from "./dictionaries/jp";

const dictionaries = { en, hi, jp };

export const getDictionary = (lang) => dictionaries[lang] ?? en;
