<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#addMemberModal"
    >
      Add Member
    </button>

    <div
      class="modal fade"
      id="addMemberModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addMemberModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="exampleModalLabel">
              Add Member to Group
            </h2>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="addMemberForm" v-on:submit.prevent="addMember">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                  v-model="firstName"
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                  v-model="lastName"
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" />
                <label class="custom-file-label" for="customFile"
                  >Upload Profile Picture (optional)</label
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-success"
              form="addMemberForm"
              value="Submit"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberAddNew",
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    addMember() {
      let newId = Math.max.apply(Math, this.$root.$data.members.map(function(person) {return person.id;})) + 1;  // Finds highest id # in members array and adds 1
      let newMember = {
        id: newId,
        firstName: this.firstName,
        lastName: this.lastName,
        dateJoined: new Date(),
        gamesPlayed: 0,
        totalWins: 0,
        profilePicture: "default-profile.jpg",
      };
      this.$root.$data.members.push(newMember);
      this.firstName = "";
      this.lastName = "";
    },
  },
};
</script>