<template>
  <body class="bg03">
  <div class="container">
    <Navbar/>
    <!-- row -->
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
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="account in accounts" :key="account.id">
              <td class="tm-product-name">{{account.name}}</td>
              <td class="text-center">{{account.email}}</td>
              <td>{{account.phoneNumber}}</td>
              <td>{{account.password}}</td>
              <td><i class="fas fa-trash-alt tm-trash-icon" @click="remove(student.id)"></i></td>
              <td><i class="fas fa-edit"></i></td>
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
              <form action="" class="tm-signup-form">
                <div class="form-group">
                  <label for="name">Account Name</label>
                  <input placeholder="Vulputate Eleifend Nulla" id="name" name="name" type="text" class="form-control validate">
                </div>
                <div class="form-group">
                  <label for="email">Account Email</label>
                  <input placeholder="vulputate@eleifend.co" id="email" name="email" type="email" class="form-control validate">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input placeholder="******" id="password" name="password" type="password" class="form-control validate">
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input placeholder="010-030-0440" id="phone" name="phone" type="tel" class="form-control validate">
                </div>
                <div class="row">
                  <div class="col-12 col-sm-4">
                    <button type="submit" class="btn btn-primary">Update
                    </button>
                  </div>
                  <div class="col-12 col-sm-8 tm-btn-right">
                    <button type="submit" class="btn btn-danger">Delete Account
                    </button>
                  </div>
                </div>
              </form>
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
    return {
      accounts: []
    }
  },
  methods: {
    init(){
      this.$http.get("/accounts").then(response => {
        this.accounts = response.data
      }).catch(e => {
        console.log(e)
      })
    }
  },
  created() {
    this.init()
  }
}
</script>

<style scoped>

</style>