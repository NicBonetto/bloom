import levenshtein from './levenshtein.js';

const formatter = (response, search) => {
  const { items } = response.body.artists;
  const results = items.map((val) => {
    const { name } = val;
    const relevance = levenshtein(name, search);
    return {
      name,
      relevance
    };
  }, [])
    .sort((a, b) => (a.relevance > b.relevance) ? 1 : -1)
    .map(val => val.name);
  return [...new Set(results.slice(0, 5))];
};

export default formatter;
