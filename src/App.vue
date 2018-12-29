<template>
  <div id="app">
    <form>
      <input-field
        v-for="(key, index) in Object.keys(skyscannerParams)"
        :key="index"
        :value="skyscannerParams[key]"
        :label="key"
        @update="update(skyscannerParams, key, $event)"
      />
    </form>
    <button class="button" type="submit" @click="submit">Single</button>
    <button class="button" type="submit" @click="batch">Batch</button>
    <button class="button" type="all" @click="all">All</button>
    <pre>{{ JSON.stringify(quotes || {}, null, 2) }}</pre>
  </div>
</template>

<script>
import InputField from "./components/Input.vue";
import Skyscanner from "./library/services/skyscanner";

export default {
  name: "app",
  components: {
    "input-field": InputField
  },
  methods: {
    update(obj, prop, event) {
      obj[prop] = event;
    },
    batch() {
      Skyscanner.batchQuotes().then(data => {
        this.$data.quotes = data;
      });
    },
    submit() {
      Skyscanner.getQuote(this.$data.skyscannerParams).then(data => {
        this.$data.quotes = data;
      });
    },
    all() {
      Skyscanner.allQuotes().then(data => {
        this.$data.quotes = data;
      });
    }
  },
  data() {
    return {
      skyscannerParams: {
        originPlace: "LAX-sky",
        destinationPlace: "BNA-sky",
        outboundDate: "anytime",
        inboundDate: "anytime",
        adults: 1
      },
      quotes: {}
    };
  }
};
</script>
