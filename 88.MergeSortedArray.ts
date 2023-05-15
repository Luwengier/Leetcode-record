/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let ni = 0;
  let mi = 0;
  nums1.splice(m, n);

  while (mi < m || ni < n) {
    if (nums2[ni] < nums1[mi] || nums1[mi] === undefined) {
      nums1.splice(mi, 0, nums2[ni]);
      ni++;
    }
    mi++;
  }
}
