const formatter = (response) => {
  const { items } = response.body.artists;
  const results = items.reduce((acc, val) => {
    return acc.concat(val.name);
  }, []);
  return [...new Set(results.slice(0, 5))];
};

export default formatter;
