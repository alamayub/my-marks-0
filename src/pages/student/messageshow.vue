<template>
  <f7-page name="message-page">
    <f7-navbar style="color: teal;" :title="message.title" back-link="Back"></f7-navbar>
    
    <f7-card outline>
      <f7-card-header class="no-border" valign="bottom">
        <span style="font-size: 20px;">{{ message.title }}</span> 
        <span class="right card-data" style="color: red;"> {{ message.time }} </span>  
      </f7-card-header>
      <f7-card-content>
        <p>{{ message.content }}</p>
      </f7-card-content>
      <f7-card-footer>
        <span class="card-data">Uploaded By : {{ message.by }}<br>Uploaded Date : {{ message.date }}</span>
      </f7-card-footer>
    </f7-card>

  </f7-page>
</template>

<script>
  import Service from '../../js/service.js';
  export default {
    data() {
      return {
        message: Service.getSingleMessage(this.$f7route.params.id)
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