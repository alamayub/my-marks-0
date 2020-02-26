<template>
  <f7-page name="addannouncement">
    <f7-navbar title="Add Announcement" back-link="Back"></f7-navbar>
    <f7-block-title>Announcement Type</f7-block-title>
    <f7-list>
      <f7-list-item checkbox title="Holiday" value="Holiday" @change="onTypeChange"></f7-list-item>
      <f7-list-item checkbox title="Exams" value="Exams" @change="onTypeChange"></f7-list-item>
      <f7-list-item checkbox title="Event" value="Event" @change="onTypeChange"></f7-list-item>
      <f7-list-item checkbox title="Others" value="Others" @change="onTypeChange"></f7-list-item>
    </f7-list>
    
    <f7-block-title>Announcement Description</f7-block-title>
    <f7-list>
      <f7-list-input type="textarea" placeholder="Description" :aria-valuetext="desc"></f7-list-input>
    </f7-list>

    <f7-row>
      <f7-button class="col" round fill>Add Announcement</f7-button>
    </f7-row>

  </f7-page>
</template>

<script>
import { fb, db } from '../../js/firebase'
export default {
  data() {
    return {
      type: [],
      desc: null
    }
  },
  methods: {
    onTypeChange (e) {
      var value = e.target.value;
      var type = this.type;
      if (e.target.checked) {
        type.push(value);
      } else {
        type.splice(type.indexOf(value), 1);
      }
      console.log(type)
    },
    
  }
}
</script>