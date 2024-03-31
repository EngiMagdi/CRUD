var WebsiteName=document.getElementById("Website-Name");
var WebsiteLink=document.getElementById("Website-Link");
var addBtn=document.getElementById("addBtn")

var websiteContainer=[];

//locAL storage
if(localStorage.getItem('websiteList') != null){
    websiteContainer=JSON.parse(localStorage.getItem('websiteList'));
    //call  display function 
    display()
}

// add function 
function addBookMark(){
var Websites={
    Name:WebsiteName.value,
    Link:WebsiteLink.value
}

websiteContainer.push(Websites);
localStorage.setItem('websiteList',JSON.stringify( websiteContainer))
display()
clear()
}


// read 
//  هخزن الداتا بتاعتي ف تابل function
function display(){
    var allBookMARKS=``;
    for(var i=0;i<websiteContainer.length ;i++ ){
     allBookMARKS +=`
        <td >${websiteContainer[i].Name}</td>
        <td><a type="button" class="btn btn-primary my-2 " href='${websiteContainer[i].Link}' >visit</a></td>
        <td><button type="button" class="btn btn-success my-2 " onclick='update(${i})'>update</button></td>
        <td><button type="button" class="btn btn-danger my-2 " onclick='delet(${i})'>Delete</button></td>
      </tr>`
    }
    document.getElementById('tableBody').innerHTML= allBookMARKS;

    // COUNTER
    document.getElementById("counter").innerHTML=websiteContainer.length;
}

//  Delete function

    function delet(index){
    websiteContainer.splice(index,1)
 
    localStorage.setItem('websiteList',JSON.stringify( websiteContainer))
   display()
}
// clear  function
function clear(){
    WebsiteName.value='';
    WebsiteLink.value='';
    
}
// update function
 function update(Index){
    WebsiteName.value=websiteContainer[Index].Name;
    WebsiteLink.value=websiteContainer[Index].Link;
    addBtn.innerHTML="update"
 }