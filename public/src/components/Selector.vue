<template>
<div class="row">
    <div class="col s2">
    </div>
    <div class="col s3">
      <label>
      Tipo de oferta:
      </label>
      <select class="browser-default">
        <option value="borsa">Trabajo</option>
        <option value="pract">Prácticas</option>
      </select>
    </div>
    <div class="col s3">
        <label>A partir de : </label>
        <input type="date" class="datepicker">
    </div>
    <div class="col s2">
        <a class="waves-effect waves-light btn valign">Buscar</a>
    </div>
    <div class="col s2">
    </div>
</div>
</template>

<script>
export default {
    name: 'selector',
    data(offer) {
        return {}
    },
    props: ['query']
}
</script>

<style>

</style>
