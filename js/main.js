// DropDown Menu Showing JS in NavBar
var number=0;
console.log(number);
DropdownBtn.addEventListener("click" , ()=>{
    
    if(number == 0){
        dropdownMenu.style.display = "block";
        ++number;
    }
    else{
        dropdownMenu.style.display = "none";
        number=0;
    }
    
})
// --------------- Dropdown menu js ends-----------