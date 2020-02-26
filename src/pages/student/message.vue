
<template>
  <f7-page name="messages">
    <f7-navbar title="My Messages" back-link="Back"></f7-navbar>
    <f7-list media-list style="margin-top: 0px;">
      <f7-list-item v-for="(message, index) in messages" :key="index" :link="message | toUrl" :title="message.title" :after="message.time"
        :text="message.content">
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
  import Service from '../../js/service.js';
  export default {
    data() {
      return {
        messages: Service.getMessages(),
      }
    },
    filters: {
      toUrl(message) {
        return `/messageshow/${message.id}/`;
      }
    }
  }
</script>