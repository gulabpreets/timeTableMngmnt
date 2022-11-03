

import {teacher} from './data.js';


var fac_on_leave;
var keys;  // it is array of keys of teacher object which contain all the names 0f the teachers
var index; // index of faculty in array 
var n_obj = new Object();
var arr = new Array(); // it will contain list of all the fasle lecture time
var fac_list =[];
// var fac_obj = new Object(); // it will conntain list of all available faculty with subject and timings
var fac_obj = []; // it will conntain list of all available faculty with subject and timings
// console.log(fac_on_leave);


function search (){
    var find =keys.indexOf(fac_on_leave)
    return find;
}

function getFalseKeys(obj) {
    var ret = [];
    for (var key in obj) {
       if (obj.hasOwnProperty(key) && obj[key] === false) {
          ret.push(key);
       }
    }
    return ret;
 }

 function getAllFac_exp_on_leave() {
    var new_arr = keys;
    const index = new_arr.indexOf(fac_on_leave);
    if (index > -1) {
        new_arr.splice(index, 1); // 2nd parameter means remove one item only
    }
    
    return new_arr;
 }

 function faculty_finder(){
    fac_obj=[];
       var arr=getAllFac_exp_on_leave();
       var hrr=findFalse(teacher,fac_on_leave);
       

       for(var i=0; i<arr.length; i++) 
       {
           for(var h=0; h<hrr.length; h++)
           {

                 for(var j in teacher[arr[i]])
              {
                  
                if(j == hrr[h] && teacher[arr[i]][j]==true)
                  {
                    //   fac_list.push(arr[i]);
                    //   fac_list.push([j]);
                    let f_name= `f_name${i}`;
                    let f_subject= `f_subject${i}`;
                    let timing= `timing${i}`;
                    let fac_objs= {
                        f_name : `${arr[i]}`,
                         f_subject : `${teacher[arr[i]]["subject"]}`,
                         timing : `${hrr[h]}`

                     }
                     fac_obj.push(fac_objs);   

                 }
                  
              }

            }
       }

       console.log(fac_obj);


 }

function findFalse(obj,fac_name) {
    n_obj = obj[fac_name];
    console.log(n_obj);  
    arr= getFalseKeys(n_obj);
    console.log(arr+"Inside findFalse");
    return arr;
        
    }
 
    function clearDoc(){
        document.getElementById("ord_lst").innerHTML="";


    }
    
    
    document.getElementById("btn").addEventListener("click", (e)=>{
        e.preventDefault();
        console.clear();
        var ul = document.getElementById("tr_data").innerHTML="";
  clearDoc();
    //  while (ul.firstChild)
    //      ul.removeChild(ul.firstChild);
        // console.log(jj+"to remove");
        // document.getElementById("ord_lst").empty();
        fac_on_leave = document.getElementById("form").value;
    console.log(fac_on_leave);
    keys = Object.keys(teacher);
    console.log('obj contains ' + keys.length + ' keys: '+  keys);
    console.log(keys);
    index= search();
    console.log(index);
    findFalse(teacher,fac_on_leave);
    faculty_finder();
    // for(var i=0; i<fac_obj.length; i++)
    for(var i in fac_obj)
    {
        let pra= `f_subject${i}`;
        // document.getElementById("ord_lst").innerHTML += `<li> ${fac_obj[i].f_name} ${fac_obj[i].f_subject} ${fac_obj[i].timing}</li>`;
        document.getElementById("tr_data").innerHTML += `<tr><td>${fac_obj[i].f_name}</td> <td>${fac_obj[i].f_subject}</td>
        <td>${fac_obj[i].timing}</td> </tr>`;
    }

//     var y = fac_list;
// {/* <td>${fac_obj[i].f_name}</td>
// <td>${fac_obj[i].f_subject}</td>
// <td>${fac_obj[i].timing}</td> */}
// for (var i = 0; i < y.length; i++) {
//     if (y[i] == 2) {
//         continue;
//     }

//     console.log(y[i]);
//     document.getElementById("ord_lst").innerHTML += `<li>${y[i]} - ${y[i+1]} </li>`;
// }
})








