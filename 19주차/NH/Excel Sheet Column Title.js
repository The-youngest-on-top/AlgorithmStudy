function convertToTitle(columnNumber) {
    columnNumber = columnNumber - 1;
    if(columnNumber>=0&&columnNumber<26)
        return String.fromCharCode(65+columnNumber);
    return convertToTitle(parseInt(columnNumber/26)) + convertToTitle((columnNumber%26)+1);
};
