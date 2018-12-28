<template>
  <div id="app">
    <form>
      <span>{{ country }}</span>
      <input-field
        label="Country"
        v-model="country"
      />
      <span>{{ locale }}</span>
      <input-field
        label="Locale"
        v-model="locale"
      />
      <span>{{ originPlace }}</span>
      <input-field
        label="Origin Place"
        v-model="originPlace"
      />
      <span>{{ originPlace }}</span>
      <input-field
        label="Destination"
        v-model="destinationPlace"
      />
      <span>{{ destinationPlace }}</span>
      <input-field
        label="Outbound Date"
        v-model="outboundDate"
      />
      <span>{{ outboundDate }}</span>
      <input-field
        label="Adults"
        v-model="adults"
      />
      <span>{{ adults }}</span>
      <input-field
        label="Inbound Date"
        v-model="inboundDate"
      />
      <span>{{ inboundDate }}</span>
    </form>
    <button class="button" type="submit" @click="submit">Test</button>
  </div>
</template>

<script>
import InputField from "./components/Input.vue";
import Skyscanner from './library/services/skyscanner'
export default {
  name: "app",
  components: {
    "input-field": InputField
  },
  methods: {
    submit: () => {
      console.log('test')
      return Skyscanner.getQuotes()
    }
  },
  data() {
    return {
      country: "",
      locale: "",
      originPlace: "",
      destinationPlace: "",
      outboundDate: "",
      adults: "",
      inboundDate: "",
    };
  }
};
</script>
