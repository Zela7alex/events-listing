<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>{{ getEventById(1) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getEventById"]), //* computed methods "Getters" can be imported like this to be used in app
    ...mapState(["user", "categories"]), //* Data in "State" from vuex.store can be imported into this component like this
  },
};
</script>

<style lang="css" scoped></style>
