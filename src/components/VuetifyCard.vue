
<div>
  <v-card>
    <v-card-text>
      <div>{{ card_text }}</div>
    </v-card-text>
  </v-card>

  <v-card class="blue darken-1 white--text">
    <v-card-text>
      <div>{{ card_text }}</div>
    </v-card-text>
  </v-card>
</div>


<script>
export default {
  props: {
  },
  data() {
    return {
      card_text: 'heleleoeororor',
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>
