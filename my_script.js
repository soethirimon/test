

document.addEventListener("DOMContentLoaded", () =>{
    var students=[];
    localStorage.setItem('students',JSON.stringify(students));

    add_studdent_form.onsubmit=async (e) =>{
        e.preventDefault();
        
        const stuFromData=new FormData(add_studdent_form);
        stuFromData.append("id", generateId());
        let student=Object.fromEntries(stuFromData.entries());
        console.log(student);
        add_studdent_form.reset();

        var students=JSON.parse(localStorage.getItem('students'));
        students.push(student);
        localStorage.setItem('students',JSON.stringify(students));              
    };

    function generateId(){
        var students=JSON.parse(localStorage.getItem('students'));
        var length=students.length;
        return length>0?students[length-1].id+1:length+1
    }
});

function add_student(){
    // let student={
    //     id:1,
    //     name:"Aye Aye",
    //     dob:new Date(2002, 2, 1),
    //     Course:"Java"
    // };

    let student=new FormData(formElem)
    console.log(student);
    console.log(typeof student);
//    var students=JSON.parse(localStorage.getItem('students')); 
//    students.push(student);
//    localStorage.setItem('students',JSON.stringify(students));

//    console.log("--------------------");
//    students.forEach(element => {
//     console.log(element);
//    });
}
function display_students(){

}
