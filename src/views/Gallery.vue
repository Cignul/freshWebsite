<template>
  <div class="gallery">
    <h1>Welcome to your image gallery</h1>
    <div class="row">
      <div class="card-body" style="outline: 4px solid black; width: 18rem;">
        <img class="card-img-top" src="../assets/animal-blur-close-up-840326.jpg" style="width:18rem;" alt="picture">
        <h5 class="card-title ">can add dynamic text once backend is up</h5>
        <p>${image.name}</p>
        <p>${image.user}</p>
        <a href="# " class="btn btn-primary card-body ">select</a>
      </div>
    </div>

    <div class="card-body" style="outline: 4px solid black; width: 18rem;">
      <img class="card-img-top" src="../assets/adorable-animal-canine-257540.jpg" style="width:18rem;" alt=" picture">
      <h5 class="card-title ">${image.title}</h5>
      <p>${image.name}</p>
      <p>${image.user}</p>
      <a href="# " class="btn btn-primary card-body ">select</a>
    </div>
    <div class="card-body" style="outline: 4px solid black; width: 18rem;">
      <img class="card-img-top" src="../assets/cute-dog-furry-69372.jpg" style="width:18rem;" alt=" picture">
      <h5 class="card-title ">${image.title}</h5>
      <p>${image.name}</p>
      <p>${image.user}</p>
      <a href="# " class="btn btn-primary card-body ">select</a>
    </div>

  </div>
  </div>
  </div>
</template>