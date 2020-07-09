const list = `[
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "FullStack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
]`;

const container = document.querySelector(".container");
const filterBtns = document.querySelector(".filterBtn");

const filterArr = JSON.parse(list);

// display on page refresh
window.addEventListener("DOMContentLoaded", () => {
  display();
});

function display() {
  filterBtns.style.display = "none";
  filterArr.forEach((arr) => {
    filterList(arr);
  });
  getID();
}

//get ID from DOM
function getID() {
  var btn;
  const ContainerContent = document.querySelectorAll(".button_container");
  ContainerContent.forEach((content) => {
    content.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      validate(id);
      btn = `<button class="clear" id=${id}>${id} <span class="close"><img src="./images/icon-remove.svg" alt=""></span></button>`;
      //add filter btn to UI
      const newBtn = document.getElementById(id);
      if (!filterBtns.contains(newBtn)) {
        filterBtns.style.display = "flex";
        filterBtns.insertAdjacentHTML("beforeend", btn);
      }
      const closeBtn = document.querySelectorAll(".clear");
      clear(closeBtn);
    });
  });
}

//remove filter btns
function clear(btn) {
  btn.forEach((clear) => {
    clear.addEventListener("click", (e) => {
      const target = e.currentTarget;
      target.remove();
      display();
    });
  });
}

// comparing IDs
const validate = (id) => {
  let result = "";
  filterArr.forEach((arr) => {
    if (arr.languages.includes(id)) {
      filterList(arr);
    } else if (arr.tools.includes(id)) {
      filterList(arr);
    } else if (arr.level === id || arr.role === id) {
      filterList(arr);
    } else {
      container.innerHTML = "";
    }
  });
};

const filterList = (arrFilter) => {
  var html = `<div class="contents">
          <div class="description center_align">
            <div class="center_align">
              <div class="image_container">
              <img src=${arrFilter.logo} class="icon" />
            </div>
            <div class="info">
              <div class="center_align">
                <p class="paraColor">${arrFilter.company}</p>
                <p class="padding darkcyan new">${arrFilter.new}</p>
                <p class="padding pureDark featured">${arrFilter.featured}</p>
              </div>
              <div>
                <h2 class="dark">${arrFilter.position}</h2>
              </div>
              <div class="pale">
                <ul>
                  <li>${arrFilter.postedAt}</li>
                  <li class="padding">${arrFilter.contract}</li>
                  <li class="padding">${arrFilter.location}</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
          <div class="button_container">
            <button class="btn" data-id=${arrFilter.role}>${arrFilter.role}</button>
            <button class="btn" data-id=${arrFilter.level}>${arrFilter.level}</button>
            <button class="btn" data-id=${arrFilter.languages[0]}>${arrFilter.languages[0]}</button>
            <button class="btn" data-id=${arrFilter.languages[1]}>${arrFilter.languages[1]}</button>
            <button class="btn" data-id=${arrFilter.languages[2]}>${arrFilter.languages[2]}</button>
            <button class="btn" data-id=${arrFilter.languages[3]}>${arrFilter.languages[3]}</button>
            <button class="btn" data-id=${arrFilter.tools[0]}>${arrFilter.tools[0]}</button>
            <button class="btn" data-id=${arrFilter.tools[1]}>${arrFilter.tools[1]}</button>
          </div>
        </div>`;
  container.insertAdjacentHTML("beforeend", html);
  const btns = document.querySelectorAll(".btn");
  const newPara = document.querySelectorAll(".new");
  const featurePara = document.querySelectorAll(".featured");

  featurePara.forEach((featured) => {
    if (featured.innerHTML === "true") {
      featured.innerHTML = "featured";
    } else if (featured.innerHTML === "false") {
      featured.style.display = "none";
    }
  });

  newPara.forEach((para) => {
    if (para.innerHTML === "true") {
      para.innerHTML = "new";
    } else if (para.innerHTML === "false") {
      para.style.display = "none";
    }
  });

  btns.forEach((btn) => {
    if (btn.innerHTML === "undefined") {
      btn.style.display = "none";
    }
  });
};

//reset display on UI
{
  document.querySelector(".clearBtn").addEventListener("click", () => {
    const btn = filterBtns.querySelector(".clear");
    if (filterBtns.contains(btn)) {
      btn.remove();
      display();
    } else {
      display();
    }
  });
}
