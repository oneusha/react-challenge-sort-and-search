'use strict';

var utils = {
  getJSON: (url) => {
    let xhr = new XMLHttpRequest();
    let defer = Promise.defer();
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          defer.resolve(JSON.parse(xhr.responseText));
        } else {
          defer.reject(xhr.responseText);
        }
      }
    };
    
    xhr.open('GET', url);
    xhr.send();
    
    return defer.promise;
  }
}

export default utils;