/**
 * @param {number[][]} points
 * @return {number}
 */
 function area(a, b, c){
    let [x1, y1] = a
    let [x2, y2] = b
    let [x3, y3] = c
    return Math.abs(x1*y2+x2*y3+x3*y1-x2*y1-x3*y2-x1*y3) * 0.5
}
function largestTriangleArea(points) {
    max = 0;
    for(let i  = 0; i < points.length - 2; i++){
        for(let j = i+1; j < points.length - 1; j++){
            for(let k = j+1; k <points.length; k++){
                max = Math.max(area(points[i], points[j], points[k]), max)
            }
        }
    }
    return max
};