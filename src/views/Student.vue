<template>
  <body id="reportsPage" class="bg02">
  <div class="" id="home">
    <div class="container">
      <Navbar/>
      <!-- row -->
      <div class="row tm-content-row tm-mt-big">
        <div class="col-xl-8 col-lg-12 tm-md-12 tm-sm-12 tm-col">
          <div class="bg-white tm-block h-100">
            <div class="row">
              <div class="col-md-8 col-sm-12">
                <h2 class="tm-block-title d-inline-block">Students</h2>

              </div>
              <div class="col-md-4 col-sm-12 text-right">
                <router-link to="/add-student" class="btn btn-small btn-primary" >Add New Student</router-link>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table table-hover table-striped tm-table-striped-even mt-3">
                <thead>
                <tr class="tm-bg-gray">
                  <th scope="col">&nbsp;</th>
                  <th scope="col">First Name</th>
                  <th scope="col" class="text-center">Last Name</th>
                  <th scope="col" class="text-center">Phone Number</th>
                  <th scope="col">Passport Number</th>
                  <th scope="col">&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="student in students" :key="student.id">
                  <th scope="row">
                    <input type="checkbox" aria-label="Checkbox">
                  </th>
                  <td class="tm-product-name">{{student.firstName}}</td>
                  <td class="text-center">{{student.lastName}}</td>
                  <td class="text-center">{{student.phoneNumber}}</td>
                  <td>{{student.passportNumber}}</td>
                  <td><i class="fas fa-trash-alt tm-trash-icon"></i></td>
                </tr>
                </tbody>
              </table>
            </div>

            <div class="tm-table-mt tm-table-actions-row">
              <div class="tm-table-actions-col-left">
                <button class="btn btn-danger">Delete Selected Items</button>
              </div>
              <div class="tm-table-actions-col-right">
                <span class="tm-pagination-label">Page</span>
                <nav aria-label="Page navigation" class="d-inline-block">
                  <ul class="pagination tm-pagination">
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <span class="tm-dots d-block">...</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">13</a></li>
                    <li class="page-item"><a class="page-link" href="#">14</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-12 tm-md-12 tm-sm-12 tm-col">
          <div class="bg-white tm-block h-100">
            <h2 class="tm-block-title d-inline-block">Student Direction</h2>
            <table class="table table-hover table-striped mt-3">
              <tbody>
              <tr>
                <td>1. Cras efficitur lacus</td>
                <td class="tm-trash-icon-cell"><i class="fas fa-trash-alt tm-trash-icon"></i></td>
              </tr>
              <tr>
                <td>2. Pellentesque molestie</td>
                <td class="tm-trash-icon-cell"><i class="fas fa-trash-alt tm-trash-icon"></i></td>
              </tr>
              <tr>
                <td>3. Sed feugiat nulla</td>
                <td class="tm-trash-icon-cell"><i class="fas fa-trash-alt tm-trash-icon"></i></td>
              </tr>
              <tr>
                <td>4. Vestibulum varius arcu</td>
                <td class="tm-trash-icon-cell"><i class="fas fa-trash-alt tm-trash-icon"></i></td>
              </tr>
              <tr>
                <td>5. Aenean eget urna enim</td>
                <td class="tm-trash-icon-cell"><i class="fas fa-trash-alt tm-trash-icon"></i></td>
              </tr>
              <tr>
                <td>6. Condimentum viverra</td>
                <td class="tm-trash-icon-cell"><i class="fas fa-trash-alt tm-trash-icon"></i></td>
              </tr>
              <tr>
                <td>7. In malesuada</td>
                <td class="tm-trash-icon-cell"><i class="fas fa-trash-alt tm-trash-icon"></i></td>
              </tr>
              <tr>
                <td>8. Placerat</td>
                <td class="tm-trash-icon-cell"><i class="fas fa-trash-alt tm-trash-icon"></i></td>
              </tr>
              <tr>
                <td>9. Donec semper</td>
                <td class="tm-trash-icon-cell"><i class="fas fa-trash-alt tm-trash-icon"></i></td>
              </tr>
              </tbody>
            </table>

            <a href="#" class="btn btn-primary tm-table-mt">Add New Category</a>
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
  </div>
  </body>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Student",
  components: {Navbar},
  data(){
    return {
      students: []
    }
  },
  methods: {
    init(){
      this.$http.get("/student/list").then(response => {
        this.students.data = response.data
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