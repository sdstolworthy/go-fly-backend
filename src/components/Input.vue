<template>
  <b-field :label="label">
    <b-input type="text" :value="value" @change="$emit('change', $event.target.value)"/>
  </b-field>
</template>

<script>
import './Input.scss'
export default {
  name: "InputField",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    label: {
      type: String,
      required: true
    },
    value: String
  }
};
</script>