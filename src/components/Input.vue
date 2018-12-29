<template>
  <b-field :label="label">
    <b-input :value="value" :type="type || 'text'" @input="$emit('update', $event)"/>
  </b-field>
</template>

<script>
import "./Input.scss";

export default {
  name: "InputField",
  props: {
    label: {
      type: String,
      required: true
    },
    type: String,
    value: String | Number
  }
};
</script>
