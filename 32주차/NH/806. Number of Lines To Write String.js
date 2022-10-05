function numberOfLines(widths, s) {
    let lines = 1;
    let last = 0;
    const base = 'a'.charCodeAt(0);
   
    for (let i = 0; i < S.length; i++) {
        const width = widths[S.charCodeAt(i) - base];
        last += width;
        if (last > 100) {
            lines++;
            last = width;
        }
    }
    return [lines, last];
};