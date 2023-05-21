<template>
  <v-container>
    <v-row class="text-center justify-center">
      <v-col cols="12" class="tableau-resultats">
        <h1>{{ nomGrandPrix }} ({{ annee }})</h1>

        <v-table theme="dark" class="tableau-content">
          <thead>
            <tr>
              <th class="text-left titre">Pilote</th>
              <th class="text-left titre">Temps</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in resultats" :key="index">
              <td class="text-left">
                {{ index + 1 }} - {{ item.Driver.givenName }}
                {{ item.Driver.familyName }} ({{ item.Constructor.name }})
              </td>
              <td class="text-left">
                {{ item.status == "Finished" ? item.Time?.time : item.status }}
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";


export default {
  name: "HelloWorld",
  components: {
  },
  data() {
    return {
      circuit: [],
      resultats: [],
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
          console.log(response.data.MRData.RaceTable.Races[0].season);
          console.log(response.data.MRData.RaceTable.Races[0]);
          this.nomGrandPrix = response.data.MRData.RaceTable.Races[0].raceName;
          this.resultats = response.data.MRData.RaceTable.Races[0].Results;
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
<style >
.tableau-resultats {
  overflow: auto;
}
.tableau-content {
  background-color: #e10600;
}
.titre {
  color: black !important;
  font-weight: bold !important;
}
</style>
