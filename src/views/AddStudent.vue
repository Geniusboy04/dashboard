<template>
  <body class="bg02">
  <div class="container">
    <Navbar/>
    <!-- row -->
    <div class="row tm-mt-big">
      <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12">
        <div class="bg-white tm-block">
          <div class="row">
            <div class="col-12">
              <h2 class="tm-block-title d-inline-block">Add Student</h2>
            </div>
          </div>
          <div class="row mt-4 tm-edit-product-row">
            <div class="col-xl-7 col-lg-7 col-md-12">
              <div class="tm-edit-product-form">
                <div class="input-group mb-3">
                  <label for="name" class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">First
                    Name
                  </label>
                  <input id="name" name="name" type="text" v-model="student.firstName" class="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" required>
                </div>
                <div class="input-group mb-3">
                  <label for="lastName" class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Last
                    Name
                  </label>
                  <input id="lastName" name="lastName" type="text" v-model="student.lastName" class="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" required>
                </div>
                <div class="input-group mb-3">
                  <label for="direction" class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Direction</label>
                  <select class="custom-select col-xl-9 col-lg-8 col-md-8 col-sm-7" v-model="student.direction" id="direction">
                    <option>Select Direction</option>
                    <option v-for="direction in directions" :key="direction.id" :value="direction.id">{{direction.code}}</option>
                  </select>
                </div>
                <div class="input-group mb-3">
                  <label for="course" class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Course</label>
                  <select class="custom-select col-xl-9 col-lg-8 col-md-8 col-sm-7" v-model="student.course" id="course">
                    <option>Select Course</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div class="input-group mb-3">
                  <label for="grade" class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Grade</label>
                  <input id="grade" name="grade" type="text" v-model="student.grade" class="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" required>
                </div>
                <div class="input-group mb-3">
                  <div class="ml-auto col-xl-8 col-lg-8 col-md-8 col-sm-7 pl-0">
                    <button type="submit" @click="createStudent" class="btn btn-primary">Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 mx-auto mb-4">
              <div class="tm-product-img-dummy mx-auto">
                <i class="fas fa-5x fa-cloud-upload-alt" onclick="document.getElementById('fileInput').click();"></i>
              </div>
              <div class="custom-file mt-3 mb-3">
                <input id="fileInput" type="file" style="display:none;" />
                <input type="button" class="btn btn-primary d-block mx-auto" value="Upload ..." onclick="document.getElementById('fileInput').click();"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="row tm-mt-big">
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
  name: "AddStudent",
  components: {Navbar},
  data() {
    return {
      student: {
        id: null,
        firstName: '',
        lastName: '',
        direction: '',
        course: null,
        grade: null
      },
      directions: []
    }
  },
  methods: {
    getDirections(){
      this.$http.get("/selection").then(response => {
        this.directions = response.data
      }).catch(e => {
        console.log(e)
      })
    },
    createStudent(){
      this.$http.post("/add-student",this.student).then(response => {
           console.log(response.data)
      }).catch(e => {
        console.log(e)
      })
    }
  },
  created() {
    this.getDirections();
  }
}
</script>

<style scoped>

</style>