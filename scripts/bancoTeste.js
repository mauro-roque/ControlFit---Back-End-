const db=require('../src/config/firebase');
(async()=>{
 const r=await db.collection('alunos').add({nome:'Teste'});
 console.log(r.id);
})();