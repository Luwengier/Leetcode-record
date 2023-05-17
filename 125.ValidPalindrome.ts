function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  const regEx = /[a-z0-9]/i;

  let result = true;
  let a = 0;
  let b = s.length - 1;

  while (result && b - a > 0) {
    while (!regEx.test(s[a])) {
      a++;
    }
    while (!regEx.test(s[b])) {
      b--;
    }

    if (s[a] !== s[b]) {
      result = false;
    }
    a++;
    b--;
  }

  return result;
}
