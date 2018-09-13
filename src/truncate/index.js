/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  /* your logic here...*/
  if(str.split('').length < length){
    return str;
  }
  else if(str.split('').length == 0){
    return str;
  }else{
    let arrStr = str.split('');
    let arrReplacer = replacer.split('');

    arrStr = arrStr.slice(arrStr.length, length);
    let arrReplacerLength = arrReplacer.length - 1;

    for (var i = arrStr.length - 1; i >= 0; i--) {
      if(arrReplacerLength >= 0){
        arrStr[i] = arrReplacer[arrReplacerLength];
        arrReplacerLength--;
      }
      
    }
    return arrStr.join('');
  }
};

export default truncate;
