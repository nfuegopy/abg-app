<template>
  <v-container class="form-container">
    <v-form @submit.prevent="submit" class="form">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="name.value"
            :counter="10"
            :error-messages="name.errorMessage"
            label="Name"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="phone.value"
            :counter="7"
            :error-messages="phone.errorMessage"
            label="Phone Number"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="email.value"
            :error-messages="email.errorMessage"
            label="E-mail"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            v-model="select.value"
            :error-messages="select.errorMessage"
            :items="items"
            label="Select"
          ></v-select>
        </v-col>

        <v-col cols="12">
          <v-checkbox
            v-model="checkbox.value"
            :error-messages="checkbox.errorMessage"
            label="Option"
            type="checkbox"
            value="1"
          ></v-checkbox>
        </v-col>

        <v-col cols="12" class="text-center">
          <v-btn class="me-4" type="submit">Submit</v-btn>
          <v-btn @click="handleReset">Clear</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';

// Define the validation schema
const validationSchema = {
  name(value) {
    if (value?.length >= 2) return true;
    return 'Name needs to be at least 2 characters.';
  },
  phone(value) {
    if (value?.length > 9 && /[0-9-]+/.test(value)) return true;
    return 'Phone number needs to be at least 9 digits.';
  },
  email(value) {
    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
    return 'Must be a valid e-mail.';
  },
  select(value) {
    if (value) return true;
    return 'Select an item.';
  },
  checkbox(value) {
    if (value === '1') return true;
    return 'Must be checked.';
  },
};

const { handleSubmit, handleReset } = useForm({ validationSchema });

const name = useField('name');
const phone = useField('phone');
const email = useField('email');
const select = useField('select');
const checkbox = useField('checkbox');

const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<style scoped>
.form-container {
  margin-top: 20px;
}

.form {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
