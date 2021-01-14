student_name_array=[];

function submit()
{
    var display_student=[];
    for (var i =1; i <= 4; i++) {
        var student_name= document.getElementById("name_of_the_student_"+i).value;
        console.log(student_name);
        student_name_array.push(student_name);

        
    }
    console.log(student_name_array);

    var length=student_name_array.length;
    console.log(length);

    for (var j = 0; j <length; j++) {
       
display_student.push("<h4>Line - "+ student_name_array[j] + "</h4>");
console.log(display_student);

       
        
    }
    console.log(display_student); 
    document.getElementById("display_name_with_commas").innerHTML = display_student; 
    var remove_commas = display_student.join(""); 
    console.log(remove_commas);
     document.getElementById("display_name_without_commas").innerHTML = remove_commas;
     document.getElementById("submit_button").style.display = "none"; 
     document.getElementById("sort_button").style.display = "inline-block";


}

