/**
 * @since 14/12/8 下午7:46
 * @author vivaxy
 */

// private property
const _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
// private method for UTF-8 encoding
const utf8Encode = (string) => {
  string = string.replace(/\r\n/g, '\n');
  let utfText = '';
  for (let n = 0; n < string.length; n++) {
    const c = string.charCodeAt(n);
    if (c < 128) {
      utfText += String.fromCharCode(c);
    } else if ((c > 127) && (c < 2048)) {
      utfText += String.fromCharCode((c >> 6) | 192);
      utfText += String.fromCharCode((c & 63) | 128);
    } else {
      utfText += String.fromCharCode((c >> 12) | 224);
      utfText += String.fromCharCode(((c >> 6) & 63) | 128);
      utfText += String.fromCharCode((c & 63) | 128);
    }
  }
  return utfText;
};
// private method for UTF-8 decoding
const utf8Decode = (utfText) => {
  let string = '';
  let i = 0;
  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  while (i < utfText.length) {
    c1 = utfText.charCodeAt(i);
    if (c1 < 128) {
      string += String.fromCharCode(c1);
      i++;
    } else if ((c1 > 191) && (c1 < 224)) {
      c2 = utfText.charCodeAt(i + 1);
      string += String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
      i += 2;
    } else {
      c2 = utfText.charCodeAt(i + 1);
      c3 = utfText.charCodeAt(i + 2);
      string += String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
      i += 3;
    }
  }
  return string;
};

export default {
  // public method for encoding
  encode(input) {
    let output = '';
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;
    input = utf8Encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }
    return output;
  },
  // public method for decoding
  decode(input) {
    let output = '';
    let chr1, chr2, chr3;
    let enc1, enc2, enc3, enc4;
    let i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 !== 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 !== 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = utf8Decode(output);
    return output;
  },
};
