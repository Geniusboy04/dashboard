<template>
  <body class="bg03">
  <div class="container">
    <Navbar/>
    <div class="row tm-content-row tm-mt-big">
      <div id="table" class="tm-col tm-col-big">
        <div class="bg-white tm-block">
          <div class="row">
            <div class="col-12">
              <h2 class="tm-block-title d-inline-block">Accounts</h2>
            </div>
          </div>
          <table class="table table-hover  tm-table-striped-even mt-3">
            <thead>
            <tr class="tm-bg-gray">
              <th scope="col">Name</th>
              <th scope="col" class="text-center">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Password</th>
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="account in accounts" :key="account.id">
              <td class="tm-product-name">{{account.name}}</td>
              <td class="text-center">{{account.email}}</td>
              <td>{{account.phoneNumber}}</td>
              <td>{{account.password}}</td>
              <td>
                <button class="btn btn-light" @click="remove(account.id)"><i class="fas fa-trash-alt tm-trash-icon"></i></button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="edit" class="tm-col tm-col-big">
        <div class="bg-white tm-block">
          <div class="row">
            <div class="col-12">
              <h2 class="tm-block-title">Edit Account</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="tm-signup-form">
                <div class="form-group">
                  <label for="name">Account Name</label>
                  <input placeholder="Admin Name" id="name" name="name" v-model="accountData.name" type="text" class="form-control validate">
                </div>
                <div class="form-group">
                  <label for="email">Account Email</label>
                  <input placeholder="Admin Email" id="email" v-model="accountData.email" name="email" type="email" class="form-control validate">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input placeholder="********" id="password" name="password" type="password" v-model="accountData.password" class="form-control validate">
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input placeholder="010-030-0440" id="phone" name="phone" v-model="accountData.phoneNumber" type="tel" class="form-control validate">
                </div>
                <div class="row">
                  <div class="col-12 col-sm-4">
                    <button type="submit" class="btn btn-primary" @click="save">Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="row tm-mt-small">
      <div class="col-12 font-weight-light">
        <p class="d-inline-block tm-bg-black text-white py-2 px-4">
          Copyright &copy; 2018 Admin Dashboard . Created by
          <a rel="nofollow" href="https://www.tooplate.com" class="text-white tm-footer-link">Tooplate</a>
        </p>
      </div>
    </footer>
  </div>
  </body>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "Accounts",
  components: {Navbar},
  data(){
    return{
      accounts: [],
      accountData: {
        id: null,
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    init(){
      this.$http.get("/accounts").then(response => {
        this.accounts = response.data
      }).catch(e => {
        console.log(e)
      })
    },
    save(){
      this.$http.post('/account/edit',this.accountData).then(response => {
        if (response.status === 200) {
          this.$swal.fire({
            icon: 'success',
            title: 'Your data has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          location.reload();
        }
      }).catch(e => {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(e);
      });
    },
    remove(id) {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http.delete('/account/delete/' + id).then(response => {
            if (response.status === 200) {
              this.$swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                type: 'success'
              }).then(function () {
                    location.reload();
                  }
              );
            }
          }).catch(e => {
            console.log(e);
          })
        }
      })
    }
  },
  created() {
    this.init();
  }
}
</script>

<style scoped>

</style>