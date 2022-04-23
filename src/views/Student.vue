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
                  <th scope="col" class="text-center">Course</th>
                  <th scope="col">Grade</th>
                  <th scope="col">&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="journal in journals" :key="journal.id">
                  <th scope="row">
                    <input type="checkbox" aria-label="Checkbox">
                  </th>
                  <td class="tm-product-name">{{journal.student.firstName}}</td>
                  <td class="text-center">{{journal.student.lastName}}</td>
                  <td class="text-center">{{journal.course.course}}</td>
                  <td>{{journal.grade}}%</td>
                  <td><button class="btn btn-light" @click="remove(journal.id)"><i class="fas fa-trash-alt tm-trash-icon"></i></button></td>
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

        <div class="col-xl-4 col-lg-13 tm-md-12 tm-sm-12 tm-col">
          <div class="bg-white tm-block h-100">
            <h2 class="tm-block-title d-inline-block">Student Direction</h2>
            <table class="table table-hover table-striped mt-2">
              <tbody id="accordion">
              <tr class="card">
                  <td class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                        </button>
                      </h5>
                  </td>
                  <td id="collapseOne" v-for="direction in directions" :key="direction.id" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body" >
                      <p></p>
                    </div>
                  </td>
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
      journals: [],
      directions: []
    }
  },
  methods: {
    getStudents(){
      this.$http.get("/journal").then(response => {
        this.journals = response.data
      }).catch(e => {
        console.log(e)
      })
    },
    getDirections(){
      this.$http.get("/directions").then(response => {
        this.directions = response.data
      }).catch(e => {
        console.log(e)
      })
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
          this.$http.delete('/journal/delete/' + id).then(response => {
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
    this.getStudents();
    this.getDirections();
  }
}
</script>

<style scoped>

</style>