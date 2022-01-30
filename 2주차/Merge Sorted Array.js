function merge(nums1, m, nums2, n) {
    //nums1의 뒤에서 부터 m 개의 배열을 잘라낸다.
    nums1.splice(m, nums1.length - m)
    //nums2의 뒤에서 부터 n 개의 배열을 잘라낸다.
    nums2.splice(n, nums2.length - n)
    //nums1에 num2를 푸쉬한다. 그 과정에서 배열이 아닌 인덱스를 푸쉬하기 위해 ...를 붙여준다.
    nums1.push(...nums2);
    //nums1을 정렬해준다.
    nums1.sort((a, b) => a - b);
  };