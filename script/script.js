// Banner Section

function checkLogin() {
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    if (username === "" || password === "") {
        alert("Username and Password cannot be empty!");
        return;
    }

    if (password === "123456") {
        alert("Login successful!");
        document.getElementById("loginForm").style.display = "none"; 
        document.getElementById("main-content").style.display = "block flex";
        document.getElementById("faq-content").style.display = "block";
        document.getElementById("learn-content").style.display = "block";
    } 
    
    else {
        alert("Incorrect password. Please try again.");
    }
}

document.getElementById('logOut').addEventListener("click", function(){
    document.getElementById("loginForm").style.display = "block flex";
    document.getElementById("faq-content").style.display = "none";
    document.getElementById("learn-content").style.display = "none";
    document.getElementById("main-content").style.display = "none"
})

// Learn Section

function loadLearnBtn(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((category) => displayBtn(category.data));
}

function displayBtn(data){
    const btnContainer = document.getElementById("button-container");

    for (let dat of data){

        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
         <button onclick="loadDetails()" class="btn btn-sm px-4 mt-1 border-[#422AD5] border-2 rounded-md text-indigo-800 hover:bg-indigo-800 hover:text-white"><i class="fa-solid fa-book-open"></i>Lesson - ${data.indexOf(dat) +1}</button>
        `;
        btnContainer.append(btnDiv);

    }

}
loadLearnBtn();

function loadDetails(){
    fetch("https://openapi.programming-hero.com/api/level/5")
    .then((response) => response.json())
    .then((details) => displayDetails(details.data));
}
function displayDetails(data){
    const detailsContainer = document.getElementById("details-container");

    for (let detail of data) {
        const detailsDiv = document.createElement("div");
        detailsDiv.innerHTML = `
                <div class="gap-2 bg-white p-4 rounded-xl">
                    <h6 class="font-bold text-lg">${detail.word}</h6>
                    <p class="my-3 text-xs">Meaning / Pronunciation</p>
                    <span class="font-semibold">${detail.meaning}</span>
                    <span>/</span>
                    <span class="font-semibold">${detail.pronunciation}</span>
                    <div class="flex justify-between mt-2">
                        <button class="py-3 px-4 bg-[#1A91FF1A] rounded-md btn" onclick="my_modal_1.showModal()"><i class="fa-solid fa-circle-info"></i></button>
                        <button class="py-3 px-4 bg-[#1A91FF1A] rounded-md btn"><i class="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
        `;
        detailsContainer.append(detailsDiv);
    }
}

// Faq Section

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector(".faq-icon");

        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
            icon.textContent = "+";
        }
        else{
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.maxHeight = null);
            document.querySelectorAll(".faq-icon").forEach(i => i.textContent = "+");
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "-";
        }
    })
})

// Smooth Scrolling

document.querySelector(".scrollBtnFaq").addEventListener('click', function(){
    document.querySelector('.faq-content').scrollIntoView({
        behavior : `smooth`
    });
});

document.querySelector(".scrollBtnLearn").addEventListener('click', function(){
    document.querySelector('.learn-content').scrollIntoView({
        behavior : `smooth`
    });
});