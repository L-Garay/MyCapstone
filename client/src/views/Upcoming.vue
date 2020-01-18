<template>
  <div class="continer-fluid">
    <navbar />
    <div class="row">
      <div class="col">
        <h1>
          {{ outing.name }}
          <i
            @click.prevent="deleteOuting(outing)"
            style="color:red"
            class="fas fa-trash"
          ></i>
          <i
            @click.prevent="showEditOutingModal"
            style="color:green"
            class="fas fa-edit"
          ></i>
        </h1>
        <h1>{{ outing.date | formatDate }}</h1>
      </div>
    </div>
    <modal name="editOutingModal">
      <form class="form" @submit.prevent="editOuting">
        <div class="form-group">
          <input
            type="text"
            name="name"
            v-model="newOuting.name"
            placeholder="Change name"
          />
          <input
            type="datetime-local"
            name="age"
            v-model="newOuting.date"
            placeholder="Change age"
          />
        </div>
        <button @click="hideEditOuting" class="btn" type="submit">
          Submit Changes
        </button>
      </form>
    </modal>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
export default {
  data() {
    return {
      newOuting: {
        name: "",
        date: ""
      }
    };
  },
  components: {
    Navbar
  },
  computed: {
    outing() {
      console.log(this.$route.params);

      return (
        this.$store.state.outings.find(
          o => o._id == this.$route.params.outingId
        ) || {
          title: "Loading..."
        }
      );
    }
  },
  methods: {
    deleteOuting(outing) {
      this.$store.dispatch("deleteOuting", outing);
    },
    editOuting() {
      let editedOuting = {
        name: this._data.newOuting.name || this.outing.name,
        date: this._data.newOuting.date || this.outing.date,
        authorId: this.outing.authorId,
        _id: this.outing._id
      };
      this.$store.dispatch("editOuting", editedOuting);
      let newOuting = {
        name: "",
        date: ""
      };
    },
    showEditOutingModal() {
      this.$modal.show("editOutingModal");
    },
    hideEditOuting() {
      this.$modal.hide("editOutingModal");
    }
  }
};
</script>

<style></style>
