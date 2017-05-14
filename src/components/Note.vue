<template>
  <div class="Note u-absolute-flex-column">
    <header class="app-header">
      <div class="u-flex-row">
        <a class="back-button" @click="goBack()"><v-icon class="md-icon">chevron_left</v-icon></a>
        <div class="menu-text u-elastic">Viewing Note</div>
        <a @click="editNote()"><v-icon class="md-icon">edit</v-icon></a>
        <a @click="deleteNote()"><v-icon class="md-icon">delete</v-icon></a>
      </div>
    </header>
    <div class="u-scroller">
      <div class="content">
        {{ note.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      note: {},
    };
  },
  methods: {
    loadNote() {
      const notes = this.$localStorage.get('notes');
      this.note = notes.find(note => note.id === this.id);
      if (!this.note) {
        this.$router.push('/');
      }
    },
    goBack() {
      this.$router.push('/');
    },
    editNote() {
      this.$router.push(`/edit/${this.id}`);
    },
    deleteNote() {
      /*
      if (confirm('Delete note?')) {
        const notes = this.$localStorage.get('notes');
        const noteIndex = notes.findIndex(note => note.id === this.id);
        notes.splice(noteIndex, 1);
        this.$localStorage.set('notes', notes);
        this.$router.push('/');
      }
      */
    },
  },
  mounted() {
    this.loadNote();
  },
};
</script>

<style scoped>
.content {
  padding: 25px;
  font-size: 14px;
  line-height: 21px;
}
</style>
