var teacher ={

    Sandeep: {
        "9_10":true,
        "10_11":false,
        "11_12":true,
        "12_1":false,
        "1_2":false,  
        "2_3":true,
        "3_4":false
    },
    Anju :{
        "9_10":true,
        "10_11":true,
        "11_12":false,
        "12_1":true,
        "1_2":false,  
        "2_3":true,
        "3_4":false
    },
    Harminder :{
        "9_10":false,
        "10_11":true,
        "11_12":true,
        "12_1":false,
        "1_2":true,    
        "2_3":true,
        "3_4":false
    },
    Lovely :{
        "9_10":true,
        "10_11":true,
        "11_12":true,
        "12_1":false,
        "1_2":false,    
        "2_3":true,
        "3_4":false
    },
    Sweety :{
        "9_10":true,
        "10_11":true,
        "11_12":false,
        "12_1":false,
        "1_2":false,    
        "2_3":true,
        "3_4":true
    },

    Deepak :{
        "9_10":true,
        "10_11":false,
        "11_12":true,
        "12_1":false,
        "1_2":false,    
        "2_3":true,
        "3_4":true
    },                                  
    Rahul :{
        "9_10":false,
        "10_11":false,
        "11_12":true,
        "12_1":false,
        "1_2":true,    
        "2_3":true,
        "3_4":false
    },
    Umesh :{
        "9_10":false,
        "10_11":false,
        "11_12":false,
        "12_1":false,
        "1_2":false,    
        "2_3":true,
        "3_4":true
    },
    Mohit :{
        "9_10":true,
        "10_11":true,
        "11_12":true,
        "12_1":true,
        "1_2":false,    
        "2_3":true,
        "3_4":true
    }
};
//    
//
//
// console.log(teacher.Anju);
// var fac_name = "Mohit";
// var n_obj = new Object();
//  n_obj = teacher.Anju;
//  console.log(n_obj);
//  console.log(n_obj);
//  function findFalse(obj,fac_name) {
//      n_obj = obj.fac_name;
//      console.log(n_obj);
//       for (const key in n_obj) {
//            console.log(`${key}: ${n_obj[property]}`);      
//            console.log(n_obj);      
//       }
//      var n_obj = new Object();
//     return n_obj = obj.fac_name;
// }
// console.log(findFalse(teacher,"Mohit"));
// var foo = { 'bar' : 'baz',
//             '2nd' : 'second',
//             '3rd' : 'third',
//             '4th' : 'forth'
// }
// for(var i in foo){
//     console.log(i+" only irretaor"); // alerts key
//     console.log(foo[i]+ "with foo[i"); //alerts key's value
//   }
//

 var obj = new Object();
for(var i=0 ;i<10; i++)
{
    obj['f_name' + i] = `f-name ${i}`;
    obj['f_subject' + i] = `f-subject ${i}`;
    obj['timing' + i] = `timing ${i}`;
}

console.log(obj);