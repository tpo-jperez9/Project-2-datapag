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

//global variables declared for open access 

const searchInput = document.getElementById("search");

// shows student on page. Students are in the list(array) and page is any number I want to start. 
const showPage = (list, page) =>{ //function will show 9 students from the list per page
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

//global function for data pagination action buttons. List param is an array of student data.
const addPagination = (list) =>{

   const numOfPagination = Math.ceil(list.length / 9); //max number of students per page
   const ul = document.querySelector(".link-list");
   ul.innerHTML = "";

   for(let i = 1; i <= numOfPagination; i ++){
      ul.insertAdjacentHTML("beforeend",`<li>
      <button type="button">${i}</button>
      </li`);
   }

   const firstPagination = ul.querySelectorAll("button")[0]; //assignng variable to first page
   firstPagination.className = "active"; //Event listener to monitor when buttons are clicked

   ul.addEventListener("click", (e) =>{   //monitoring for button click event. On click change className button to "active" and change prior active button to null. 

      const active = ul.querySelector(".active"); 
      active.className = "";

      e.target.className = "active";
      showPage(list, e.target.textContent);  //run showpage function
   });
   }
   
// Call functions
showPage(data,1);
addPagination(data);





 