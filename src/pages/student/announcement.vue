<template>
  <f7-page name="announcement">
    <f7-navbar style="color: teal;" title="Announcement" back-link="Back"></f7-navbar>
    <f7-list media-list style="margin-top: 0px;">
      <f7-list-item v-for="(announcement, index) in announcements" :key="index" :link="announcement | toUrl" :title="announcement.title" :after="announcement.time" :text="announcement.content"></f7-list-item>
    </f7-list>
    <f7-list media-list style="margin-top: 0px;">
      <f7-list-item v-for="(announcement, index) in announcements" :key="index" :link="announcement | toUrl" :title="announcement.title" :after="announcement.time" :text="announcement.content"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
  import Service from '../../js/service.js';
  export default {
    data() {
      return {
        announcements: Service.getData(),
      }
    },
    filters: {
      toUrl(announcement) {
        return `/announcementshow/${announcement.id}/`;
      }
    }
  }
</script>

<style scoped>
.exam {
  margin: 5px 10px;; 
  padding: 0;
  width: 100%;
}
.exam-content {
  margin: 0; 
  padding: 5px 10px;
  color: grey;
}
.exam .sname {
  font-family: Montserrat, sans-serif; 
  font-size: 18px;
}
</style>