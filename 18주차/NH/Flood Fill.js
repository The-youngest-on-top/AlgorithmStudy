function floodFill(image, sr, sc, newColor) {
    let currColor=image[sr][sc];
    if(newColor==currColor)return image;
    function sample(image,row,col){
        if(row<0||col<0||row>=image.length||col>=image[0].length||image[row][col]!=currColor)return ;
        image[row][col]=newColor;
        sample(image,row-1,col);
        sample(image,row+1,col);
        sample(image,row,col+1);
        sample(image,row,col-1);
        return image;
    }
    return sample(image,sr,sc);
};