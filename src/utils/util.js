
function randomValue({ type, list, max, min }) {
  const mindata = min || 0;
  const maxdata = max || 8;
  const length = Math.floor(Math.random() * (maxdata - mindata) + mindata);

  if(type === 'string') {
    return randomChiString(length);
  }
  if(type === 'color') {
    return randomColor();
  }
  if (list) {
    const index = Math.floor(Math.random() * (list.length));
    return list[index];
  }
  if (max) {
    
    if (type === 'int') {
      return Math.floor(Math.random() * (max - mindata) + mindata)
    }
    return Math.random() * (max - mindata) + mindata
  }
};

// 随机生成汉字
function randomChi() {
  return String.fromCodePoint(Math.round(Math.random() * 20901) + 19968);
}
// 随机汉字串
function randomChiString(length) {
  const strLength = length;
  let chiString = '';
  for(let i=0; i<strLength; i++){
    chiString += randomChi();
  }
  return chiString;
}

// 随机生成颜色
function randomColor() {
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
  return 'rgba('+ r +','+ g +','+ b +',1)';
}

export { randomValue }