// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
 noStroke();//枠線なし
  for(let i = 0; i < 8; i++){//x座標が8まで1ずつ増える
  for(let j = 0; j < 8; j++){//y座標が8まで1ずつ増える
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

  if((i+j)% 2 == 0){noFill();}//x座標とy座標の和が偶数のコマは背景白
  else{fill(166);}//x座標とy座標の和が奇数のコマは背景グレー

  rect(size*i,size*j,size,size);

//格子できた

if (j<3 && (i+j)%2==1){fill(255,0,0)}//赤丸
else if(j>4 && (i+j)%2==1){fill(0,0,0)}//黒丸
else{noFill()};
circle(size*(i+1/2),size*(j+1/2),size*6/7);//サイズを目視で無理やり調整しました。。

}
}
}
