export default function BlogPreviewCard(card) {
    // *** *** *** Variables *** *** *** 
    const $template = document.getElementById("blog-preview-card").content,
        $clone = document.importNode($template, true),
        $card = $clone.querySelector(".blog-preview-card"),
        $img = $clone.querySelector(".blog-preview-card-img"),
        $status = $clone.querySelector(".blog-preview-card-status"),
        $date = $clone.querySelector(".blog-preview-card-date"),
        $title = $clone.querySelector(".blog-preview-card-title"),
        $content = $clone.querySelector(".blog-preview-card-content"),
        $userName = $clone.querySelector(".blog-preview-card-user-name"),
        $userImg = $clone.querySelector(".blog-preview-card-user-img");

    const IMG_SRC = "./assets/images/";

    // *** *** *** Ejecución *** *** ***
    $img.src = IMG_SRC + card.img;
    $img.alt = card.title;
    $status.textContent = card.status;
    $date.textContent = "Published " + card.date.toLocaleDateString("en-GB", {
        day: "numeric", 
        month: "short", 
        year: "numeric"
    });
    $title.textContent = card.title;
    $content.textContent = card.content;
    $userImg.src = IMG_SRC + card.user.img;
    $userName.textContent = card.user.name;
    return $card;
};
