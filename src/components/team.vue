<template>
  <div>
      <ul class="tabs">
        <li>
          <label><input type="radio" v-model="selectedAvailable" value="All" /> <span>All</span></label>
        </li>
        <li>
          <label><input type="radio" v-model="selectedAvailable" value="free" /> <span>Free</span></label>
        </li>
        <li>
          <label><input type="radio" v-model="selectedAvailable" value="busy" /> <span>Busy</span></label>
        </li>
      </ul>
      <div class="row row_team">
        <div class="col-lg-4" v-for="itemTeam in filteredPeople">
          <div class="item-team">
            <div class="item-team__image">
              <img :src="itemTeam.photo" alt="alt">
            </div>
            <div class="item-team__name">Name: {{itemTeam.name}}</div>
            <div class="item-team__age">Age: {{itemTeam.age}}</div>
            <div class="item-team__text">{{itemTeam.text}}</div>
            <div class='status' :class="{ active: itemTeam.statusTeam }"></div>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
  export default {
    name: 'team',
    data() {
      return {
        team: [
          { name: "Oleg", age: 25, text: 'Hello everyone! I am one', photo: require('../assets/team1.jpg'), isAvailable: "free", statusTeam: true },
          { name: "Dima", age: 45, text: 'Chief', photo: require('../assets/team2.jpg'), isAvailable: "free", statusTeam: true },
          { name: "Sasha", age: 44, text: 'secretary', photo: require('../assets/team3.jpg'), isAvailable: "busy", statusTeam: false },
          { name: "Serg", age: 22, text: 'Hello there', photo: require('../assets/team4.jpg'), isAvailable: "free", statusTeam: true },
          { name: "Kiter", age: 14, text: 'Bye!', photo: require('../assets/team2.jpg'), isAvailable: "busy", statusTeam: false },
          { name: "Andrey", age: 66, text: 'Team-lead', photo: require('../assets/team3.jpg'), isAvailable: "busy", statusTeam: false }
        ],
        selectedAvailable: "All"
      }
    },
    computed: {
      filteredPeople: function () {
        var vm = this;
        var isAvailable = vm.selectedAvailable;

        if (isAvailable === "All") {
          return vm.team;
        } else {
          return vm.team.filter(function (itemTeam) {
            return itemTeam.isAvailable === isAvailable;
            console.log(itemTeam.isAvailable)
          });
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tabs {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tabs li {
    margin: 0 15px;
  }

  .tabs label input {
    position: absolute;
    z-index: -1;
    height: 1px !important;
    width: 1px !important;
    opacity: 0 !important;
    margin: 12px 2px 0 7px !important;
  }

  .tabs label>span {
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    padding: 0;
    transition: all 0.3s;
  }
  .tabs label>span:hover,
  .tabs label input:checked + span {
    color: green;
    border-bottom: 1px green solid;
  }

  .item-team {
    position: relative;
  }

  .status {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    right: 20px;
    background: red;
  }

  .status.active {
    background: green;
  }

  .team {
    padding: 20px 0;
  }

  .row_team>div {
    margin-bottom: 15px;
  }

  .item-team {
    padding: 20px;
    text-align: center;
    box-shadow: 0 5px 15px #dadada;
    border-radius: 9px;
    min-height: 100%;
  }
</style>