import data from './announcement.js'
import attendance from './attendance'
import message from './messages'

import exam from './exam'
export default {
  getData () {
    return data;
  },
  getSingleAnnouncement(id) {
    for(var i = 0; i < data.length; i++) {
      if(data[i].id == id) {
        return data[i];
      }
    }
  },
  getAttendance() {
    return attendance;
  },
  getAttendancePercentage() {
    var p = 0;
    var total = Object.keys(attendance).length
    for(var i = 0; i < attendance.length; i++) {
      if(attendance[i].status == true) {
        p += 1
      }
    }
    var percentage = (p / total) * 100;
    return Math.floor(percentage);
  },

  getMessages() {
    return message;
  },
  getSingleMessage(id) {
    for(var i = 0; i < message.length; i++) {
      if(message[i].id == id) {
        return message[i];
      }
    }
  },

  getExam () {
    return exam;
  },
};