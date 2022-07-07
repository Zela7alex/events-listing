<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- creates for loop that iterates through each event in events: data()-->
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
//* 1st) components being used must always be imported
export default {
  components: {
    EventCard, //* 2nd) register component
  },
  data() {
    return {
      events: [], //* this is left empty to bring in json.response data objects
    };
  },
  created() {
    //* created() is a life cycle hook
    EventService.getEvents() //* This is now making api call from EventService.js/services (now each component can make axios call from that file instead of repeating the call in each individual component)
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log("There was an error" + error.response);
      });
  },
};
</script>
