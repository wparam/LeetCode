const HtmlUtil = {
  _merge: (col, nk, nv) => {
    if(col.length === 0 || col[col.length-1].val + 1 < nk){
      col.push({
        key: nk,
        val: nv
      })
    }else{
      col[col.length-1].val = nv
    }
  },
  getTagsIdx: content =>{ 
    const res = [];
    let left = -1;
    for(let i=0, l=content.length-1; i<l; i++){
      if(content[i] === '<'){
        left = left === -1 ? i : -1;
      }else if(content[i] === '>'){
        if(left !== -1){
          HtmlUtil._merge(res, left, i)
          left = -1;
        }
      }
    }
    return res;
  }
};

const test = `Abcd <span> cdde </span> fsdfs <a>dfsfdf</a> df2ffdf<br/> sfsf<table><tr><td colspan="2"></td><td></td><td colspan="2"></td></tr><tr><td colspan="2"></td><td></td><td colspan="2"></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></table>`
console.log(HtmlUtil.getTagsIdx(test))