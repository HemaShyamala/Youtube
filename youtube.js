function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

let videos_div = document.getElementById("videos");

async function requestVideos() {
    videos_div.innerHTML = null;
    let search = document.getElementById("search").value;

    let response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=AIzaSyBtnNDtawGaDC8L7eSGBRaDL42vabVcmWw&maxResults=20`
    );
    // console.log(response);

    let data = await response.json();
    console.log(data);

    let { items } = data;
    // console.log(items);
    items.forEach(({ id: { videoId } }) => {
        console.log(videoId);
        let div = document.createElement("div");

        div.innerHTML = `<iframe width="250" height="200" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        videos_div.appendChild(div);
    });
}

async function popularVideos() {
    videos_div.innerHTML = null;

    let response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyBtnNDtawGaDC8L7eSGBRaDL42vabVcmWw&maxResults=20`
    );
    // console.log(response);

    let data = await response.json();
    console.log(data);

    let { items } = data;
    // console.log(items);
    items.forEach(({ id }) => {
        console.log(id);
        let div = document.createElement("div");

        div.innerHTML = `<iframe width="250" height="200" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        videos_div.appendChild(div);
    });
}