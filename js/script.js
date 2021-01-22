/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

//global variables

const searchInput = document.getElementById("search");
const searchButton = searchInput.nextElementSibling;

const showPage = (list, page) =>{
   let startIndex = (page *9) - 9;
   let endIndex = page * 9;
   let ul = document.querySelector(".student-list");

   ul.innerHTML = '';

   for(let i = 0; i < list.length; i++){ //The for loop adds a list of students depending on page number and indexes
      if(i >= startIndex && i < endIndex){
         ul.insertAdjacentHTML("beforeend", `<li class="student-item cf">
         <div class="student-details">
         <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
         <h3>${list[i].name.first} ${list[i].name.last}</h3>
         <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
         </div>
         </li>`);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
//global function
const addPagination = (list) =>{

   const numOfPagination = Math.ceil(list.length / 9);
   const ul = document.querySelector(".link-list");
   ul.innerHTML = "";

   for(let i = 1; i <= numOfPagination; i ++){
      ul.insertAdjacentHTML("beforeend",`<li>
      <button type="button">${i}</button>
      </li`);
   }

   const firstPagination = ul.querySelectorAll("button")[0];
   firstPagination.className = "active"; //Event listener to monitor when buttons are clicked

   ul.addEventListener("click", (e) =>{

      const active = ul.querySelector(".active");
      active.className = "";

      e.target.className = "active";
      showPage(list, e.target.textContent);
   });
   }
   
const noResults = () =>{ //function when no student results are found
   const studentList = document.querySelector(".student-list");
   const paginationUL = document.querySelector(".link-list");
   const paginationLI = paginationUL.querySelectorAll("li");
   studentList.innerHTML = "<p>No Results Located</p>";

   for(let i = 0; i < paginationLI.length; i++){
      paginationUL.removeChild(paginationLI[i]);

   }
}

///global function
     const searchStudents = () =>{
      const inputValue = searchInput.nodeValue.toLowerCase();
      const searchList = [];

      for(let i = 0; i < list.length; i++){ //for loop to search through last,first student names
         let fullName = list[i].name.first.toLowerCase();
         fullName += " ";
         fullName += list[i].name.last.toLowerCase();

         if(fullName.includes(inputValue)){
            searchList.push(list[i]);
         }
         if(searchList.length > 0){ //if statement to display student name matches
            showPage(searchList, 1);

         }
          else{ //if no matches search will yield no results
            noResults();
         }
     }
 }

            //event listeners
     searchInput.addEventListener("keyup", searchStudents);
     searchButton.addEventListener("click", searchStudents);
   
   

   
// Call functions
showPage(data,1);
addPagination(data);
additionalSearch(data);




 