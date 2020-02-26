<template>
  <f7-page name="home">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title style="margin: 0px; text-align: center;">Dashboard</f7-nav-title>
      <f7-nav-right>
        <f7-link href="/addannouncement/">
          <f7-icon size="20px" f7="plus"></f7-icon>
        </f7-link>

        <f7-link icon-only href="/messages/">
          <f7-icon size="20px" f7="envelope">
            <f7-badge color="red">{{ messageLength }}</f7-badge>
          </f7-icon>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>

    <div data-pagination='{"el": ".swiper-pagination"}' data-space-between="0" data-slides-per-view="2" class="swiper-container swiper-init demo-swiper" style="margin: auto 2px;">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="a in 6" :key="a">
          <f7-card outline class="attnd-card">
            <f7-card-content style="padding: 10px;">
              <p class="date">Slide {{ a }}</p>
            </f7-card-content> 
          </f7-card>
        </div>
      </div>
    </div>

    <f7-row no-gap class="row1">
      <f7-col width="50">
        <a href="/announcement/" class="link" style="width: 100%;">
          <f7-card outline class="card1">
            <div style="height: 15px; text-align: right;">
              <f7-badge class="badge-style">{{ aLength }}</f7-badge>
            </div>
            <div style="height: 85px;">
              <img src="https://cdn0.iconfinder.com/data/icons/holiday-piconic/512/megaphone-512.png" swidth="50" height="50" alt="Annoucement">
              <p class="para">Annoucement</p>
            </div>
          </f7-card>
         </a>
      </f7-col>
      <f7-col width="50">
        <a href="/timetable/" class="link" style="width: 100%;">
          <f7-card outline class="card2">
            <div style="height: 15px; text-align: right;">
              <f7-badge class="badge-style">1</f7-badge>
            </div>
            <div style="height: 85px;">
              <img src="https://cdn1.iconfinder.com/data/icons/online-education-indigo-vol-1/256/Class_Timetable-512.png" swidth="50" height="50" alt="Time Table">
              <p class="para">Time Table</p>
            </div>
          </f7-card>
         </a>
      </f7-col>
      <f7-col width="50">
        <a href="/attendance/" class="link" style="width: 100%;">
          <f7-card outline class="card1">
            <div style="height: 15px; text-align: right;">
              <f7-badge class="badge-style">{{ atnd_per }}%</f7-badge>
            </div>
            <div style="height: 85px;">
              <img src="https://cdn3.iconfinder.com/data/icons/education-and-science-22/68/24-512.png" swidth="50" height="50" alt="Attendance">
              <p class="para">Attendance</p>
            </div>
          </f7-card>
         </a>
      </f7-col>
      <f7-col width="50">
        <a href="/about/" class="link" style="width: 100%;">
          <f7-card outline class="card2">
            <div style="height: 15px; text-align: right;">
              <f7-badge class="badge-style">1</f7-badge>
            </div>
            <div style="height: 85px;">
              <img src="https://cdn3.iconfinder.com/data/icons/online-education-hazel-vol-1/256/Assignment-512.png" swidth="50" height="50" alt="Assignment">
              <p class="para">Assignment</p>
            </div>
          </f7-card>
         </a>
      </f7-col>
      <f7-col width="50">
        <a href="/about/" class="link" style="width: 100%;">
          <f7-card outline class="card1">
            <div style="height: 15px; text-align: right;">
              <f7-badge class="badge-style">1</f7-badge>
            </div>
            <div style="height: 85px;">
              <img src="https://cdn3.iconfinder.com/data/icons/wedding-67/48/calender_love_heart_-512.png" swidth="50" height="50" alt="Calender">
              <p class="para">Calender</p>
            </div>
          </f7-card>
         </a>
      </f7-col>
      <f7-col width="50">
        <a href="/exam/" class="link" style="width: 100%;">
          <f7-card outline class="card2">
            <div style="height: 15px; text-align: right;">
              <f7-badge class="badge-style"> {{ examLength }}</f7-badge>
            </div>
            <div style="height: 85px;">
              <img src="https://cdn2.iconfinder.com/data/icons/xomo-basics/128/document-03-512.png" swidth="50" height="50" alt="Exams">
              <p class="para">Exams</p>
            </div>
          </f7-card>
         </a>
      </f7-col>
    </f7-row>
  </f7-page>
</template>

<script>
import Service from '../js/service.js';
export default {
  data() {
    return {
      announcements: Service.getData(),
      aLength: 0,

      attendances: Service.getAttendance(),
      atnd_per: Service.getAttendancePercentage(),

      exams: Service.getExam(),
      examLength: 0,

      messages: Service.getMessages(),
      messageLength: 0
    }
  },
  created() {
    this.aLength = Object.keys(this.announcements).length
    this.examLength = Object.keys(this.exams).length
    this.messageLength = Object.keys(this.messages).length
  },
}
</script>

<style scoped>
.attnd-card {
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100px;
}
.row1 {
  margin: 0px 10px;
}

.card1, .card2 {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  align-items: center;
  justify-content: center;
  text-align: center;
  display: inline-flexbox;
  margin: 10px auto auto auto; 
  background-image: linear-gradient(#2d9696, #228f8e, #158787, #008080, #007979, #007272, #006a6b);
  height: 100px; 
  width: 100%;
}
.card1 {
  margin-right: 5px; 
}
.card2 {
  margin-left: 5px; 
}
.para {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-top: 0px; 
  margin-top: -5px; 
  color: yellow;
}
.badge-style {
  background-color: red;
  margin: 5px 5px auto auto;
}
</style>>
