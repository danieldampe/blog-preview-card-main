import BlogPreviewCard from "./components/BlogPreviewCard.js"; 

// *** *** *** Variables *** *** *** 
const $main = document.getElementById("main");

const allBlogPreviewCard = [
    {
        user: {
            name: "Greg Hooper",
            img: "image-avatar.webp"
        },
        title: "HTML & CSS foundations",
        content: "These languages are the backbone of every website, defining structure, content, and presentation.",
        date: new Date(2023, 11, 21),
        status: "Learning",
        img: "illustration-article.svg"
    }
];

// *** *** *** Ejecución *** *** *** 
document.addEventListener("DOMContentLoaded", () => {   
    $main.append(
        BlogPreviewCard(allBlogPreviewCard[0])
    );
});
