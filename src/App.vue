<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <ul class="list-inline">
            <li class="list-inline-item"><router-link to="/colors">Цвет</router-link></li>
            <li class="list-inline-item"><router-link to="/boxes">Box</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container"><div class="row"><div class="col"><hr /></div></div></div>
    <router-view/>
  </div>
</template>

<style>
@import './assets/css/bootstrap.min.css';
.text-minus {
  font-size: .8rem;
}
</style>
