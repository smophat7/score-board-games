// Thanks to https://acdcjunior.github.io/how-bind-date-object-to-input-date-vue.js-v-model.html for doing the heavy lifting here

<template>
  <input
    type="date"
    class="form-control"
    v-bind:value="dateToYYYYMMDD(value)"
    v-on:input="updateValue($event.target)"
    v-on:focus="selectAll"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: Date,
      //   default: none,
    },
  },
  methods: {
    dateToYYYYMMDD(d) {
      // alternative implementations in https://stackoverflow.com/q/23593052/1850609
      return (
        d &&
        new Date(d).toISOString().split("T")[0]
      );
    },
    updateValue: function (target) {
      //   this.$emit("input", target.valueAsDate);
      this.$store.state.dateSet = true;
      this.$store.commit("selectDateToRecord", target.valueAsDate);     // I think the issue with the date being off lies here...?
    },
    selectAll: function (event) {
      // Workaround for Safari bug (don't know if this is still an issue)
      // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
      setTimeout(function () {
        event.target.select();
      }, 0);
    },
  },
};
</script>