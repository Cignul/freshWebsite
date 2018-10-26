<template>
  <div class="login">
    <!-- header for logo, need to fix style -->
    <header>
      <img src="../assets/pupLogo.png" class="rounded float-left">
    </header>

    <!-- modal time -->
    <!-- Large modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">LOGIN</button>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <form>
            <div class="form-group" aria-hidden="true">
              <label for="exampleInputEmail1">Email address:</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password:</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <!-- can use something similar to this to switch pages on submit -->
            <!-- <router-link :to="{name: 'vault', params: {vaultId: Vault.id}}">{{Vault.name}}</router-link> -->
          </form>

        </div>
      </div>
    </div>
  </div>
</template>