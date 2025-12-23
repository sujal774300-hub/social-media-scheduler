function addPost() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    let post = { title, content, date, time };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));

    showPosts();
}

function showPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let postDiv = document.getElementById("posts");

    postDiv.innerHTML = "";

    posts.forEach((p) => {
        postDiv.innerHTML += `
            <div>
                <h4>${p.title}</h4>
                <p>${p.content}</p>
                <small>${p.date} ${p.time}</small>
                <hr>
            </div>
        `;
    });
}

showPosts();
