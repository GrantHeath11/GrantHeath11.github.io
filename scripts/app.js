"use strict";

// IIFE - Immediately Invoked Functional Expression
(function () {

    function displayHomePage(){
    console.log("Calling displayHomePage()...");

    let aboutUsBtn = document.getElementById("aboutUsBtn");
    aboutUsBtn.addEventListener("click", function(){
       location.href="about.html";

    });

        let MainContent = document.getElementsByTagName("main")[0];

        let MainParagraph = document.createElement("p");
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");

        MainParagraph.textContent = "This is my first paragraph";
        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        let SecondString = `${FirstString} my second paragraph`;
        MainParagraph.textContent = SecondString;

        MainContent.appendChild(MainParagraph);
        let DocumentBody = document.body;

        let Article = document.createElement("Article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3"> This is my Article Paragraph</p>`;

        ArticleParagraph.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
    }

    function displayAboutPage(){
        console.log("Calling displayAboutPage()...");

    }
    function displayProductsPage(){
        console.log("Calling displayProductsPage()...");
    }

    function displayServicesPage(){
        console.log("Calling displayServicesPage()...");
    }

    function displayContactInfoPage(){
        console.log("Calling displayContactInfoPage()...");
    }

    function Start()
    {
        console.log("Starting...");

        switch(document.title){
            case "Home":
                displayHomePage();
                break;
            case "About":
                displayAboutPage();
                break;
            case "Products":
                displayProductsPage();
                break;
            case "Services":
                displayServicesPage();
                break;
            case "Contact":
                displayContactInfoPage();
                break;

        }


    }window.addEventListener("load", Start);

})();