import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "Alex Nunez" },
    events: [
      { id: 1, title: "...", organizer: "..." },
      { id: 2, title: "...", organizer: "..." },
      { id: 3, title: "...", organizer: "..." },
      { id: 4, title: "...", organizer: "..." },
    ],
  },
  getters: {
    //*These are various ways you can make/use getters >>>
    // catLength: (state) => {
    //   return state.categories.length;
    // },
    // doneTodos: (state) => {
    //   return state.todos.filter((todo) => todo.done);
    // },
    // activeToDosCount: (state) => {
    //   return state.todos.filter((todo) => !todo.done).length;
    // },
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
