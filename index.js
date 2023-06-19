// 'use strict';
function pow(num, degree) {
  if (degree === 0) {
      return 1;
  } else {
      return num * power(num, degree - 1);
  }
}
