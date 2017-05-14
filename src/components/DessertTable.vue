<template>
  <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
    </v-card-title>
    <div v-show="loading">
      <v-progress-circular indeterminate class="primary--text" />
    </div>
    <v-data-table v-show="!loading" v-bind:headers="headers" v-model="items" v-bind:search="search" hide-actions class="elevation-1">
      <template slot="items" scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.sodium }}</td>
        <td class="text-xs-right">{{ props.item.calcium }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      loading: false,
      headers: [
        {
          text: 'Dessert (100g serving)',
          left: true,
          sortable: false,
          value: 'name',
        },
        {
          text: 'Calories',
          value: 'calories',
        },
        {
          text: 'Fat',
          value: 'fat',
        },
        {
          text: 'Carbs',
          value: 'carbs',
        },
        {
          text: 'Protein',
          value: 'protein',
        },
        {
          text: 'Sodium',
          value: 'sodium',
        },
        {
          text: 'Calcium',
          value: 'calcium',
        },
        {
          text: 'Iron',
          value: 'iron',
        },
      ],
      items: [
        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%',
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%',
        },
      ],
      search: '',
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>
