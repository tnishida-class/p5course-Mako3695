// テキスト「練習：繰り返し」
// 太い線と細い線が交互に出てくるパターン
// 練習：以下の2パターンにプログラムを書き換えてみましょう
// (1) 細い、太い、すごく太い、の3本周期で太さが変わる
// (2) 最初の3本が細い、次の3本が太い、最後の3本がすごく太い

function setup() {
  createCanvas(100,100);
  background(196);
  //line(10,0,10,100)
  //line(20,0,20,100)
  //line(30,0,30,100)

  //for(let x = 10; x < 100; x=x+10){line(x,0,x,100)}自分でやったやつ
  for(let i=0;i<9;i++){let x=(i+1)*10; line(x,0,x,100);
  if(i % 2 ==0){strokeweight(2);}
  else{strokeweight(1);}

}
