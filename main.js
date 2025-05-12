let question = [
  [
    'メニューを頼むとおまけでピーナッツがもらえるチェーンカフェは？', 
    '1. コメダ珈琲',
    '2. 上島珈琲',
    '3. 星乃珈琲',
    '1'
    ], 
  [
    '数多くの種類のパフェを楽しめるカフェは？', 
    '1. スターバックスコーヒー',
    '2. からふね屋',
    '3. コメダ珈琲',
    '2'
  ], 
  [
    'フラペチーノなど、季節によって楽しめるメニューが頻繁に変化するカフェは？', 
    '1. スターバックスコーヒー',
    '2. 星乃珈琲',
    '3. 珈琲館',
    '1'
  ]
];

let quiz = document.getElementById('quiz');
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');

let quizCnt = 0;
let correctCnt = 0;


function quizSet() {
  quiz.textContent = `${quizCnt + 1}問目
  ${question[quizCnt][0]}`;
  ans1.textContent = question[quizCnt][1];
  ans2.textContent = question[quizCnt][2];
  ans3.textContent = question[quizCnt][3];
};

quizSet();

function answerCheck(ans) {
if (ans == question[quizCnt][4]){
alert('正解');
correctCnt ++;
}else{
  alert('不正解');
}
quizCnt ++;
if (quizCnt == question.length){
  quiz.textContent = `終了！
  ${quizCnt}問中、${correctCnt}問正解だったよ！`;
  // quiz.textContent = '終了！';
  ans1.textContent = "";
  ans2.textContent = "";
  ans3.textContent = "";
  if (correctCnt == question.length ){
    quiz.textContent = `終了！${quizCnt}問中、${correctCnt}問正解だったよ！
    君はカフェマスターだ！`;
  }else if (correctCnt > question.length * 0.3){
    quiz.textContent = `終了！${quizCnt}問中、${correctCnt}問正解だったよ！
    そこそこだね！`;
  }else{
    quiz.textContent = `終了！${quizCnt}問中、${correctCnt}問正解だったよ！
    まだまだ、カフェマスターへの道は遠いな！`;
  }

}else{
  quizSet();
}
};

// function answerCheck(ans) {
// if (quizCnt > question.length){
//   quiz.textContent = '終了！';
//   ans1.textContent = question[quizCnt][1];
//   ans2.textContent = question[quizCnt][2];
//   ans3.textContent = question[quizCnt][3];
// }
// else{
//   quizCnt ++;
// }
//   quizSet();
// };
// 