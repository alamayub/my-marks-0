<template>
  <f7-page name="announcement-page">
    <f7-navbar style="color: teal;" :title="data.title" back-link="Back"></f7-navbar>
    
    <f7-card outline>
      <f7-card-header class="no-border" valign="bottom">
        <span style="font-size: 20px;">{{ data.title }}</span> 
        <span class="right card-data" style="color: red;"> {{ data.time }} </span>  
      </f7-card-header>
      <f7-card-content>
        <p>{{ data.content }}</p>
      </f7-card-content>
      <f7-card-footer>
        <span class="card-data">Uploaded By : {{ data.by }}<br>Uploaded Date : {{ data.date }}</span>
      </f7-card-footer>
    </f7-card>

  </f7-page>
</template>

<script>
  import Service from '../../js/service.js';
  export default {
    data() {
      return {
        id: this.$f7route.params.id,
        data: Service.getSingleData(id)
      }
    }
  }
</script>

<style scoped>
.card-data {
  color: grey; 
  font-size: 12px;
}
</style>