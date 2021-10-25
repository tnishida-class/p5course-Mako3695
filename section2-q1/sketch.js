// 小手調べ
function setup(){
  noFill();
  ellipse(50,50,10);
  ellipse(50,50,20);
  ellipse(50,50,30);
  ellipse(50,50,40);

  for(let i = 0; i < 10; i++){
    let r = i*10+10;
    if(i < 5){
      stroke(0,0,255);
    }
    else{
      stroke(255,0,0);
    }
    ellipse(50,50,r);
    }
}
