<template>
<v-card class="blue-grey darken-1">
    <div class="card-content white-text">
        <span class="card-title">{{offer.company}}</span>
        <p>
            {{offer.description}}
        </p>
    </div>
    <div class="card-content white-text">
        <span class="card-title">{{offer.city}}</span>
        <p>
            {{offer.requirements}}
        </p>
    </div>
    <div class="card-action">
        <a href="#">Más información</a>
    </div>
</v-card>
</template>

<script>
export default {
  name: 'card',
  data (offer) {
    console.log('component loaded ');
    return {
    }
  },
  props: ['offer']
}
</script>

<style>
</style>
