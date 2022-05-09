 var a=[];
 function submit(){
     var b=[];
     for(var c=1;c<=4;c++){
     var d=document.getElementById("name_of_the_student_"+c).value;
     console.log(d);
     a.push(d);
     }
     var e=a.length;
     console.log(e);
     for(var f=0;f<e;f++){
     b.push("<h4>name- "+a[f]+"</h4>");
     console.log(b);
     }
     document.getElementById("display_name_with_commas").innerHTML=b;
     var g=b.join(" ");
     console.log(g);
     document.getElementById("display_name_without_commas").innerHTML=g;
     document.getElementById("submit_button").style.display="none";
     document.getElementById("sort_button").style.display="inline-block";
 }
 function sorting(){
     a.sort();
     console.log(a);
     var h=[];
     var i=a.length;
     console.log(i);
     for(var f1=0;f1<i;f1++){
        h.push("<h4>name- "+a[f1]+"</h4>");
        console.log(h);
        } 
    
        var g1=h.join(" ");
        console.log(g1);
        document.getElementById("display_name_without_commas").innerHTML=g1;
 }