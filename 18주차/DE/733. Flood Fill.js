/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

 function floodFill(image, sr, sc, newColor) {
    let n = image[sr][sc],
		fill = (i, j) => {
			if (!image[i] || image[i][j] === undefined || image[i][j] !== n || image[i][j] === newColor) return;
			image[i][j] = newColor;
			fill(i + 1, j);
			fill(i - 1, j);
			fill(i, j + 1);
			fill(i, j - 1);
		};
	fill(sr, sc);
	return image;
};