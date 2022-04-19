<template>
  <body id="reportsPage">
  <div class="" id="home">
    <div class="container">
      <Navbar/>
      <!-- row -->
      <div class="row tm-content-row tm-mt-big">
        <div class="tm-col tm-col-big">
          <div class="bg-white tm-block h-100">
            <h2 class="tm-block-title">Latest Hits</h2>
            <canvas id="lineChart"></canvas>
          </div>
        </div>
        <div class="tm-col tm-col-big">
          <div class="bg-white tm-block h-100">
            <h2 class="tm-block-title">Performance</h2>
            <canvas id="barChart"></canvas>
          </div>
        </div>
        <div class="tm-col tm-col-small">
          <div class="bg-white tm-block h-100">
            <canvas id="pieChart" class="chartjs-render-monitor"></canvas>
          </div>
        </div>

        <div class="tm-col tm-col-big">
          <div class="bg-white tm-block h-100">
            <div class="row">
              <div class="col-8">
                <h2 class="tm-block-title d-inline-block">Top Student List</h2>

              </div>
              <div class="col-4 text-right">
                <router-link to="/students" class="tm-link-black">View All</router-link>
              </div>
            </div>
            <ol class="tm-list-group tm-list-group-alternate-color tm-list-group-pad-big">
              <li class="tm-list-group-item">
                Donec eget libero
              </li>
              <li class="tm-list-group-item">
                Nunc luctus suscipit elementum
              </li>
              <li class="tm-list-group-item">
                Maecenas eu justo maximus
              </li>
              <li class="tm-list-group-item">
                Pellentesque auctor urna nunc
              </li>
              <li class="tm-list-group-item">
                Sit amet aliquam lorem efficitur
              </li>
              <li class="tm-list-group-item">
                Pellentesque auctor urna nunc
              </li>
              <li class="tm-list-group-item">
                Sit amet aliquam lorem efficitur
              </li>
            </ol>
          </div>
        </div>
        <div class="tm-col tm-col-big">
          <div class="bg-white tm-block h-100">
            <h2 class="tm-block-title">Calendar</h2>
            <div id="calendar"></div>
            <div class="row mt-4">
              <div class="col-12 text-right">
                <a href="#" class="tm-link-black">View Schedules</a>
              </div>
            </div>
          </div>
        </div>
        <div class="tm-col tm-col-small">
          <div class="bg-white tm-block h-100">
            <h2 class="tm-block-title">Upcoming Tasks</h2>
            <ol class="tm-list-group">
              <li class="tm-list-group-item">List of tasks</li>
              <li class="tm-list-group-item">Lorem ipsum doloe</li>
              <li class="tm-list-group-item">Read reports</li>
              <li class="tm-list-group-item">Write email</li>

              <li class="tm-list-group-item">Call customers</li>
              <li class="tm-list-group-item">Go to meeting</li>
              <li class="tm-list-group-item">Weekly plan</li>
              <li class="tm-list-group-item">Ask for feedback</li>

              <li class="tm-list-group-item">Meet Supervisor</li>
              <li class="tm-list-group-item">Company trip</li>
            </ol>
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
  name: "Home",
  components: {Navbar}
}


</script>

<style scoped>

</style>