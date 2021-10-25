// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    rect(0, i * d, width, (i + 1) * d);//rect(X,Y,幅、高さ)
    //fill(blue);
    //rect(0,0,width,d)
    //rect(0,d,width,d*2)
    //fill(255,255,255);
    //rect(0,1*d,width,d)
    //rect(0,3*d,width,d)
    fill(blue)
    rect(0,0,width,d)

    if((i+1)%2 ==0){fill(blue)}
    else{fill(255,255,255)}
  }



  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  noStroke();
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
  rect(0,d*2,size,d);
  rect(d*2,0,d,d*5)

}
