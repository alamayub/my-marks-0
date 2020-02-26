<template>
  <f7-page name="attendance">
    <f7-navbar style="color: teal;" title="My Attendance" back-link="Back"></f7-navbar>
    <f7-list class="attendance-list" style="margin-top: 0px;">
      <f7-list-item
        :class="`bg-color-${attendance.status ? 'green' : 'red'}`" 
        style="margin: 5px auto;" 
        v-for="(attendance, index) in attendances" 
        :key="index" 
        :title="attendance.value"  
        :after="attendance.date"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
  import Service from '../../js/service.js';
  export default {
    data() {
      return {
        attendances: Service.getAttendance(),
      }
    }
  }
</script>

<style scoped>
.attendance-list {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  -webkit-text-fill-color: white;
  margin: 10px;
}
</style>