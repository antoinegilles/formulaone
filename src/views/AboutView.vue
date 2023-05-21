<template>
  <div>
    <h1>Gagnant</h1>

    <div class="d-flex justify-center">
      <div>
        <redbull-car></redbull-car>
      </div>
      <div class="tableau-result">
        <v-table height="300px">
          <tbody>
            <tr>
              <td>Nom</td>
              <td>{{ gagnant?.Driver.givenName }} {{ gagnant?.Driver.familyName }}</td>
            </tr>
            <tr>
              <td>Ecurie</td>
              <td>{{ gagnant?.Constructor.name }}</td>
            </tr>
            <tr>
              <td>Grille de départ</td>
              <td>{{ gagnant?.grid }}</td>
            </tr>
            <tr>
              <td>Laps</td>
              <td>{{ gagnant?.laps }}</td>
            </tr>
            <tr>
              <td>Points gagnés</td>
              <td>{{ gagnant?.points }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </div>
</template>
<script>
import RedbullCar from "../components/objet3d/RedbullCar.vue";
import axios from "axios";

export default {
  components: {
    RedbullCar,
  },
  data() {
    return {
      circuit: [],
      resultats: [],
      gagnant:null,
      infoGlobale: [],
      nomGrandPrix: "",
      annee: "",
    };
  },
  methods: {
    getLastResult() {
      var config = {
        method: "get",
        url: "https://ergast.com/api/f1/current/last/results.json",
        headers: {},
      };

      axios(config)
        .then((response) => {
          // console.log(response.data.MRData.RaceTable.Races[0]);
          this.nomGrandPrix = response.data.MRData.RaceTable.Races[0].raceName;
          this.resultats = response.data.MRData.RaceTable.Races[0].Results;
          this.gagnant = response.data.MRData.RaceTable.Races[0].Results[0];
          this.annee = response.data.MRData.RaceTable.Races[0].season;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getLastResult();
  },
};
</script>

<style>
.tableau-result{
  padding-top: 7em;
}
</style>
