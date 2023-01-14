var arr = [
    { dp: "https://images.unsplash.com/photo-1587716402624-ca4d8b13bd3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", story_img: "https://images.unsplash.com/photo-1587715363857-65fcecee8fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", name: "James" },
    { dp: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80", story_img: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80", name: "Priya" },
    { dp: "https://images.unsplash.com/photo-1558273665-5c494fee2f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1894&q=80", story_img: "https://images.unsplash.com/photo-1551299335-7337a578ef8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80", name: "Johans" },
    { dp: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80", story_img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80", name: "Anjali" },
    { dp: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", story_img: "https://images.unsplash.com/photo-1588249175361-d64335d67e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80", name: "Priyanka" },
]
var clutter = "";
arr.forEach(function (element, idx) {
    clutter += `  <div class="screen">
    <div class="story">
        <img id="${idx}" src="${element.dp}" alt="">
    </div>
    <h3>${element.name}</h3>
</div>`

});
var stories = document.querySelector(".stories");
stories.innerHTML = clutter
var grow = 0;
var story_screen = document.querySelector(".story_screen");
var progress = document.querySelector(".progress");
var like = document.querySelector(".post i");
var bot_like = document.querySelector("span i");
stories.addEventListener("click", function (details, idx) {
    story_screen.style.display = `initial`;
    story_screen.style.backgroundImage = `url(${arr[details.target.id].story_img})`;
    setTimeout(function () {
        story_screen.style.display = `none`;
    }, 2500);
    if (grow <= 100) {
        setInterval(function () {
            progress.style.width = `${grow++}%`;
        }, 25)
    } else {
        grow = 0;
    }
})
var post = document.querySelector(".post")
post.addEventListener("dblclick", function () {
    like.style.opacity = 1;
    like.style.color = `red`;
    like.style.fontSize = `70px`;
    bot_like.style.color = `red`;
})
post.addEventListener("click", function () {
    like.style.fontSize = `0px`;
    bot_like.style.color = `rgb(187, 187, 186)`;
}, 25)