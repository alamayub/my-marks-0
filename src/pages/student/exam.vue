<template>
  <f7-page name="exam">
    <f7-navbar style="color: teal;" title="My Available Exams" back-link="Back"></f7-navbar>
    <f7-col v-for="(subject, index) in subjects" :key="index" style="margin-top: 0px;">
      <f7-card outline class="exam">
        <f7-card-content class="exam-content">
          <span class="sname">{{ subject.name }}</span><br>
          <span class="rno">Room No. : {{ subject.room_no }}</span><br>
          <span class="rno">Exam Date : {{ subject.date }}</span><br> 
          <span class="date">Reporting Time : {{ subject.time }}</span>
        </f7-card-content>
      </f7-card>
    </f7-col>
  </f7-page>
</template>

<script>
  import Service from '../../js/service'
  export default {
    data() {
      return {
        subjects: Service.getExam()
      }
    },
  }
</script>

<style scoped>
.exam {
  margin: 5px 10px;; 
  padding: 0;
}
.exam-content {
  margin: 0; 
  padding: 5px 10px;
}
.exam .sname {
  font-family: Montserrat, sans-serif; 
  font-size: 18px;
}
.exam .rno {
  font-size: 12px;
}
.exam .date {
  color: orange; 
  font-size: 14px;
}
</style>