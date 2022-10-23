
<template>
  <!-- CSS only -->
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
 <div id="app" class="container-fluid">

    <div class="row">

     <div class="col-12 pt-3 text-center">
       <h3 class="pb-3">Vue Laravel Pagination</h3>
       <vue-pagination class="mb-2"  @event="vuePaginate" :meta-data="paginations" :onSides="1"></vue-pagination>
     </div>

     <div class="row justify-content-center">
         <div class="col-10 pt-3 pb-4">
          <select class="form-select form-select-sm" name="" @change="onChange" id="" :value="perPage[0]">
            <option value="2">PerPage - 2</option>
            <option value="4">PerPage - 4</option>
            <option value="6">PerPage - 6</option>
            <option value="8">PerPage - 8</option>
            <option value="10">PerPage - 10</option>
          </select>
        </div>
     </div>

     <div v-show="userData" v-for="(d,i) in userData" :key="i" class="col-12 col-md-6 mt-2">
         <div class="card shadow">
           <div class="card-body" style="min-height:130px;">
             <h5 class="card-title">{{ d.id +' - '+ d.title }}</h5>
             <h6 class="card-subtitle mb-2 text-muted">{{ d.created_at }}</h6>
             <p class="card-text">{{ d.slug }}</p>
           </div>
         </div>
     </div>

    </div>

 </div>
</template>

<script>
  import { VuePagination } from '@zakerxa/vue-laravel-pagination';
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'ServeDev',
    data () {
        return {
          endpoint    : 'https://developers.zakerxa.com/api/paginations?page=',
          perPage     : [2,'&per_page=' /* default path => '&per_page=' (Or) change [2,'&UrPath='] */],
          userData    : [],
          paginations : {}
        }
      },
      components:{
        VuePagination
      },
      created(){
        this.startInit();
      },
      methods: {
        vuePaginate(e){
            this.currentPage = e;
            this.startInit(e[0]+e[1]);
          },
          startInit(e){
            this.getPaginateWithUsers(e??(this.perPage[1]??'&per_page=')+this.perPage[0]).then(res=>this.insertData(res));
          },
          insertData(res){
              // Get user data to render in template
              this.userData = res.data;
              // Get Pag data from DB & Assign value.
              this.paginations = {
                 current_page : res.current_page,
                 last_page : res.last_page,
                 prev_page_url : res.prev_page_url,
                 next_page_url : res.next_page_url,
                 per_page      : this.perPage
              }
          },
          getPaginateWithUsers(url){
            return fetch(this.endpoint+url, {
              method: 'GET',
              headers: {'Content-Type': 'Application/json'}
              })
            .then(res => res.json())
            .then(res => res)
            .catch(err => err);
          },
          onChange(e){
           this.perPage[0] = e.target.value;
           let newPerPage = (this.perPage[1]??'&per_page=')+this.perPage[0];
           this.currentPage ? this.startInit((this.currentPage[0]??'')+newPerPage) : this.startInit()
          }
      }
  });
  </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
