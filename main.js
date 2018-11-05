// let dispName = document.querySelector('#names').textConten;
// let questions = document.querySelector('.questions').value;
// let name = null;
//
// let a1 = questions[0];
// let a2 = questions[1];
// let a3 = questions[2];
// let a4 = questions[3];
// let a5 = questions[4];
//
// const names = {
//   combo1: ['mike killer', 'tim turner', 'tony bandana', 'james game', 'kip bust a lip'],
//   combo2: ['kiz the god', 'miz gang', 'biz business', 'trizz trill', 'riz the ruler'],
//   combo3: ['fam bam', 'bam on em', 'sam sons', 'dam the damned', 'sham the pharoah'],
//   combo4: ['gif onit', 'rif with it', 'lif it ', 'bif buff', 'zif zones'],
//   combo5: ['kid justice', 'sid vicous', 'gid gaddit', 'bid on ', 'rid itall']
// }
//
// if(Q[0]===yes&&Q[1]===yes&&Q[2]===yes&&Q[3]===yes&&Q[4]){
//   name = names.combo1[0];
//   dispName = name;
// }
//
//
// questions.addEventListener('click', function())

let names = ['Mike BadA$$', 'Kid Kulprit', 'Gansta Ron', 'The Infamous ODB']

function newName(){
  let randomName = Math.floor(Math.random() * (names.length));
  document.getElementById('nameDisplay').innerHTML = names[randomName]; 
}
