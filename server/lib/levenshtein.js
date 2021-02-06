const levenshtein = (a, b) => {
  if (a.length === 0) {
    return b.length;
  }
  if (b.length === 0) {
    return a.length;
  }

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let x = 1; x <= b.length; x++) {
    for (let y = 1; y <= a.length; y++) {
      if (b.charAt(x - 1) === a.charAt(y - 1)) {
        matrix[x][y] = matrix[x - 1][y - 1];
      } else {
        matrix[x][y] = Math.min(
          matrix[x - 1][y - 1] + 1, 
          Math.min(
            matrix[x][y - 1] + 1,
            matrix[x - 1][y] + 1 
          )
        );
      }
    }
  }
  return matrix[b.length][a.length];
};

export default levenshtein;
