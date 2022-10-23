# Vue Laravel Pagination

## Welcome Back

Hi Everyone,My name is **Zin Min Htet** and here is my [**Facebook account**](https://www.facebook.com/mm.zakerxa).


# Here is Live Demo -->

<img src="https://raw.githubusercontent.com/Zakerxa/Vue-Laravel-Pagination/master/src/assets/preview.png" alt="preview" width="200" style="max-width:200px;"/>

**Watch Now [Live Demo](https://zakerxa.github.io/Vue-Laravel-Pagination/).**

## Installation

```NPM
npm i @zakerxa/vue-laravel-pagination
```

## Setup

**1 - Import the vue component locally in the script Tag**

```js
<script>
 import { VuePagination } from '@zakerxa/vue-laravel-pagination';

  export default {
    components:{
      VuePagination
    }
  }
</script>
```
**OR**
**Global registration in your main.js**

```Javascript
 import { VuePagination } from '@zakerxa/vue-laravel-pagination';
 const app = createApp(App);
 app.component("vue-pagination", VuePagination);

```

**2 - In your Vue Template**

```js
<template>
    <vue-pagination @event="vuePaginate" :meta-data="paginations" :onSides="1"></vue-pagination>
</template>
```

**3 - In your script Tag**

```js
<script>
export default {
    data(){
      return {
          endpoint    : 'http://developers.zakerxa.com/api/paginations?page=',
          perPage     : [2],/* default path => '&per_page=' (Or) change [2,'&UrPath='] */
          paginations : {},
          userData    : []
      },
    },
    created(){
      this.startInit();
    },
    methods:{
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
        /* You can also request with Axios */
        return  axios.get(this.endpoint+url,{
          headers: {'Content-Type': 'Application/json'}
        })
        .then(res => res.data)
        .catch(err => err);
      },
    }
}

</script>
```


## Explanation of usage

**1.vuePagnation methods can listen child PageNumber & PerPage to the template.**
```js
  <vue-pagination @event="vuePaginate"></vue-pagination>

  vuePaginate(e){
    <!-- Array parameter value will be response -->
     e[0] = 1;
     e[1] = '&perpage=2';

    <!-- Call server request methods & insert the url -->
     this.getPaginateAndUserData(e[0]+e[1]).then(res=> this.insertData(res))
  }
```


**2.We need to assign  response value to paginations.**
```js
<vue-pagination :meta-data="paginations"></vue-pagination>

this.paginations = {
   current_page  : res.current_page,
   last_page     : res.last_page,
   prev_page_url : res.prev_page_url,
   next_page_url : res.next_page_url,
   per_page      : this.perPage
}
```

**3.On each sides pagination number will be show.**
```
<vue-pagination :onSides="1"></vue-pagination>
<<,1,...,4,5,6,...,20,>>

Or

<vue-pagination :onSides="2"></vue-pagination>
<<,1,...,10,11,12,13,14,...,20,>>
```

**4.You can also change the style of css customize**

```js
:style="style"

this.style: {
  fontFamily : 'sans-serif',
  background : '#fff',
  active : 'rgb(214, 247, 255)',
  color : 'rgb(106, 106, 114)',
  hover: 'rgb(214, 247, 255) 1px -1px 5px inset',
  border: '0.5px solid rgb(214, 237, 251)',
  next : '&raquo;',
  prev : '&laquo;'
},
```


## That's all what you need 

**In your template**
```Vue
 <template>
  <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <div id="app" class="container-fluid">

     <div class="row">

      <div class="col-12 pt-3 text-center">
        <h3 class="pb-3">Vue Laravel Pagination</h3>
        <vue-pagination class="mb-2"  @event="vuePaginate" :meta-data="paginations" :onSides="1"></vue-pagination>
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

```

**In your script tab**
```js
<script>
  import { VuePagination } from '@zakerxa/vue-laravel-pagination';
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'ServeDev',
    data () {
        return {
          endpoint    : 'http://developers.zakerxa.com/api/paginations?page=',
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
          this.userData = res.data;
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
        }
      }
  });
  </script>
```
