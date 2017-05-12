<template>
  <div class="NoteList u-absolute-flex-column">
    <header class="app-header">All Notes ({{ notesCount }})</header>
    <ul class="u-scroller">
      <li v-for="note in notes">
        <NoteListItem v-bind:note="note" />
      </li>
    </ul>
    <div class="app-controls">
      <div class="u-flex-row">
        <v-btn primary dark class="u-elastic" @click.native="addNew()">Add Note</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import NoteListItem from '@/components/NoteListItem';

export default {
  name: 'hello',
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    loadNotes() {
      this.notes = this.$localStorage.get('notes');
    },
    addNew() {
      console.log('hello');
      this.$router.push('/new');
    },
  },
  mounted() {
    this.loadNotes();
  },
  computed: {
    notesCount() {
      return this.notes.length;
    },
  },
  components: { NoteListItem },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.NoteList ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.NoteList ul li {
  border-bottom: solid 1px #EFEFEF;
}

.NoteList ul li a {
  position: relative;
  display: block;
  padding: 12px 25px;
  cursor: pointer;
  color: #2c3e50;
  text-decoration: none;
}

.NoteList ul li a:hover {
  color: #006699;
}

.NoteList ul li a i {
  position: absolute;
  top: 22px;
  right: 25px;
  margin: auto 0;
}

.NoteList ul li a .note-title {
  width: 90%;
  margin: 0;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.NoteList ul li a .small {
  margin: 0;
  margin-top: 3px;
  font-size: 11px;
}
</style>
