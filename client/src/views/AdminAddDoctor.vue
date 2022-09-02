<template>
  <div>
    <section class="vh-100" style="background-color: #2779e2;">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-9">
      
              <h1 class="text-white mb-4">Enregistrer un Professionnel de sante</h1>
             
                <form action="/insertdoctor" method="post">
                  <div class="card" style="border-radius: 15px;">
                    <div class="card-body">
          
                      <div class="row align-items-center pt-4 pb-3">
                        <div class="col-md-3 ps-5">
          
                          <h6 class="mb-0">Nom</h6>
          
                        </div>
                        <div class="col-md-9 pe-5">
          
                          <input type="text"  name="nom" class="form-control form-control-lg"  />
          
                        </div>
                      </div>
                      <div class="row align-items-center pt-4 pb-3">
                        <div class="col-md-3 ps-5">
          
                          <h6 class="mb-0">Prenom</h6>
          
                        </div>
                        <div class="col-md-9 pe-5">
          
                          <input type="text" name="prenom" class="form-control form-control-lg" />
          
                        </div>
                      </div>
          
                      <hr class="mx-n3">
          
                      <div class="row align-items-center py-3">
                        <div class="col-md-3 ps-5">
          
                          <h6 class="mb-0"> Addresse Email</h6>
          
                        </div>
                        <div class="col-md-9 pe-5">
          
                          <input type="email" name="email" class="form-control form-control-lg" placeholder="example@example.com"  />
          
                        </div>
                      </div>
                      <div class="row align-items-center py-3">
                        <div class="col-md-3 ps-5">
          
                          <h6 class="mb-0"> Numero</h6>
          
                        </div>
                        <div class="col-md-9 pe-5">
          
                          <input type="text" name="numero" class="form-control form-control-lg"  />
          
                        </div>
                      </div>
          
                      <hr class="mx-n3">
          
                      <div class="row align-items-center py-3">
                        <div class="col-md-3 ps-5">
          
                          <h6 class="mb-0">Specialité</h6>
          
                        </div>
                        <div class="col-md-9 pe-5">
          
                          <input type="text" name="specialite" class="form-control form-control-lg"  />
          
                        </div>
                      </div>
                      <div class="row align-items-center py-3">
                        <div class="col-md-3 ps-5">
          
                          <h6 class="mb-0">Centre</h6>
          
                        </div>
                        <div class="col-md-9 pe-5">
          
                          <input type="text" name="centre" class="form-control form-control-lg"  />
          
                        </div>
                      </div>
          
                      <hr class="mx-n3">
          
                      <div class="row align-items-center py-3">
                        <div class="col-md-3 ps-5">
          
                          <h6 class="mb-0">Mot de passe </h6>
          
                        </div>
                        <div class="col-md-9 pe-5">
          
                          <input type="text" name="password" class="form-control form-control-lg"  />
          
                        </div>
          
                      <hr class="mx-n3">
          
                      <div class="px-5 py-4">
                        <button  class="btn btn-primary btn-lg">Valider</button>
                      </div>
          
                    </div>
                  </div>
                  </div>
                </form>
      
            </div>
          </div>
        </div>
      </section>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>