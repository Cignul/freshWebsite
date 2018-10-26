function drawImages(results) {
  console.log(results)
  let template = ''

  for (let i = 0; i < results.length; i++) {
    const image = results[i];
    template += `
    <div class="col-4">
    <div class="card-body" style="outline: 4px solid black">
        <img class="card-img-top" src="${image}" alt="picture">
        <h5 class="card-title ">${image.title}</h5>
        <p>${image.name}</p>
        <p>${image.user}</p>
        <a href="# " class="btn btn-primary card-body ">purchase</a>
        <audio controls>
            <source src="${image.preview}" type=""
        </audio>
       
    </div>
</div>

    `
  }
}