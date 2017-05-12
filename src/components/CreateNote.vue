<template>
  <div class="CreateNote u-absolute-flex-column">
    <header class="app-header">
      <div class="u-flex-row">
        <a class="back-button" @click="goBack()"><v-icon class="md-icon">chevron_left</v-icon></a>
        <div class="menu-text u-elastic">{{ id ? 'Editing Note' : 'Create Note' }}</div>
      </div>
    </header>
    <ul class="u-scroller">
      <div class="note-create-form">
        <v-text-field
          multi-line
          label="Enter note content"
          v-model="note.text">
        </v-text-field>
      </div>
    </ul>
    <div class="app-controls">
      <div class="u-flex-row">
        <v-btn primary dark class="u-elastic" @click.native="saveNote()">Save</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
const uuidV4 = require('uuid/v4');

export default {
  props: ['id'],
  data() {
    return {
      note: {},
      noteIndex: -1,
    };
  },
  methods: {
    saveNote() {
      const notes = this.$localStorage.get('notes');
      if (this.note.text !== '') {
        const note = Object.assign({}, this.note, {
          id: this.note.id || uuidV4(),
          timestamp: Date.now(),
        });
        if (this.noteIndex >= 0) {
          notes[this.noteIndex] = note;
        } else {
          notes.push(note);
        }
      } else if (this.noteIndex >= 0) {
        notes.splice(this.noteIndex, 1);
      }
      this.$localStorage.set('notes', notes);
      this.$router.push('/');
    },
    loadNote() {
      const notes = this.$localStorage.get('notes');
      this.noteIndex = notes.findIndex(note => note.id === this.id);
      if (this.noteIndex >= 0) {
        this.note = notes[this.noteIndex];
      } else {
        this.$router.push('/');
      }
    },
    goBack() {
      this.$router.push('/');
    },
  },
  mounted() {
    if (this.id) {
      this.loadNote();
    }
  },
};
</script>

<style>
.note-create-form {
  padding: 20px 16px;
}

</style>
