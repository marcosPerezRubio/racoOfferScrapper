<template>
<v-card class="blue lighten-2">
    <div class="row" style="margin-bottom: 0px;">
        <div class="card-content white-text">
            <span class="card-title">{{offer.company}} - {{offer.city}}</span>
            <div>
              <h6 class="left-align">{{offer.workday}}</h6>
            </div>
        </div>
    </div>
    <div class="row" style="margin-top: 0px;">
        <div class="col s6">
            <div class="card-content white-text">
                    {{offer.description}}
            </div>
        </div>
        <div class="col s6">
            <div class="card-content white-text">
                {{offer.requirements}}
            </div>
        </div>
    </div>
    <div class="divider"></div>
    <div class="card-action">
        <a href="#" class="white-text">Más información</a>
        <span class="white-text right">Caduca el {{offer.expirationDate}} </span>
    </div>
</v-card>
</template>

<script>
export default {
    name: 'card',
    data(offer) {
        console.log('component loaded ');
        return {}
    },
    props: ['offer']
}
</script>

<style>

</style>
