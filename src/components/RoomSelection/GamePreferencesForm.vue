<template>
  <div class="game_preference_form">
    <md-dialog :md-active.sync="dialog.active">
      <md-dialog-title> {{ dialog.header }}</md-dialog-title>
      <md-dialog-content> {{ dialog.content }} </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="dialog.active = false"
          >Okay</md-button
        >
      </md-dialog-actions>
    </md-dialog>

    <div>
      <div @click="displayDecks = !displayDecks">
        <md-toolbar>
          <h4 class="md-title" style="flex: 1">Available decks</h4>
          <h5>
            selected [{{ selected_decks.length }}/{{ available_decks.length }}]
          </h5>
          <md-button>
            <md-icon v-if="displayDecks">keyboard_arrow_up</md-icon>
            <md-icon v-else>keyboard_arrow_down</md-icon>
          </md-button>
        </md-toolbar>
      </div>

      <div v-if="displayDecks">
        <div style="text-align: center">
          <md-button @click="selectAll" class="md-raised md-accent"
            >All</md-button
          >
          <md-button @click="selectNone" class="md-raised">None</md-button>
          <md-button @click="selectOnlyOfficial" class="md-raised"
            >Select only official</md-button
          >
          <md-button @click="selectOnlyCustom" class="md-raised">
            select only custom</md-button
          >
          <md-button
            @click="displayAll"
            class="md-raised"
            v-if="deck_display_settings !== 'ALL'"
            >Show All</md-button
          >
        </div>
        <div class="deck_container">
          <div v-for="(entry, index) of displayed_decks" :key="index">
            <deck-display
              class="deck"
              :deck_data="entry"
              :isSelected="false"
              @deckUnSelected="deckUnSelect"
              @deckSelected="deckSelect"
            ></deck-display>
          </div>
        </div>
      </div>
      <div class="mode_selct_div">
        <md-radio
          v-model="game_mode.selected"
          :value="game_mode.available.NORMAL"
          >Normal
          <md-tooltip md-direction="top"
            >Normal mode. Every round a randomly chosen Tzar will select a
            winner!</md-tooltip
          ></md-radio
        >
        <md-radio
          v-model="game_mode.selected"
          :value="game_mode.available.GOD_IS_DEAD"
          >God is dead
          <md-tooltip md-direction="top"
            >In this game mode there is no elected Tzar, everyone can and should
            vote. Submission with most votes earns the point!</md-tooltip
          ></md-radio
        >
      </div>
      <md-field>
        <label>You can create a new room, just pick a unique name.</label>
        <md-input v-model="room_name"></md-input>
        <md-button
          class="md-raised md-accent"
          @click="newRoom"
          :disabled="selected_decks.length == 0"
          >Create</md-button
        >
      </md-field>
    </div>
  </div>
</template>

<script>
import DeckDisplay from "@/components/GameComponents/DeckDisplay";
import { cardsAgainstApi, pushMessageToSnackbar, cardsApi } from "@/main";
import { GamePreferences } from "@/libs/src/index";
export default {
  data: () => ({
    selected_decks: [],
    displayDecks: false,
    room_name: null,
    available_decks: [],
    deck_display_settings: "ALL",
    game_mode: {
      selected: "NORMAL",
      available: {
        NORMAL: "NORMAL",
        GOD_IS_DEAD: "GOD_IS_DEAD",
      },
    },
    dialog: {
      active: false,
      content: "default",
      header: "header",
    },
  }),
  props: {},
  components: {
    "deck-display": DeckDisplay,
  },
  created() {
    this.refreshAvailableDecks();
  },
  computed: {
    displayed_decks() {
      if (this.deck_display_settings === "CUSTOM") {
        return this.available_decks.filter((item) => {
          return !item.official;
        });
      }
      if (this.deck_display_settings === "OFFICIAL") {
        return this.available_decks.filter((item) => {
          return item.official;
        });
      }
      return this.available_decks;
    },
  },
  methods: {
    displayAlert({ header, content }) {
      console.log(`got: ${header} + ${content}`);
      this.dialog.content = content;
      this.dialog.header = header;
      this.dialog.active = true;
    },
    deckSelect(deck) {
      deck.isSelected = true;
      this.selected_decks.push(deck);
    },

    deckUnSelect(deck) {
      deck.isSelected = false;
      this.selected_decks = this.selected_decks.filter((v) => v !== deck);
    },
    newRoom() {
      const gamePreferences = new GamePreferences();
      gamePreferences.deck_preferences = this.selected_decks;
      gamePreferences.mode = this.game_mode.selected;

      cardsAgainstApi.createNewGameGameNewPost(
        this.room_name,
        gamePreferences,
        (error, data, response) => {
          if (error) {
            let errorContent = error;
            if (response.text) {
              try {
                errorContent += `,\n${JSON.parse(response.text).detail}`;
              } catch (error) {
                errorContent += `,\n${response.text}`;
              }
            }

            this.displayAlert({
              header: "Failed to create room",
              content: errorContent,
            });
          } else {
            this.room_data = JSON.parse(response.text);
            console.log("Room created");
            pushMessageToSnackbar("Room was created.");
            this.$emit("newRoomCreated", this.room_name);
          }
        }
      );
    },
    selectAll() {
      this.available_decks.forEach((item) => {
        this.deckSelect(item);
      });
    },
    selectNone() {
      this.available_decks.forEach((item) => {
        this.deckUnSelect(item);
      });
    },
    selectOnlyOfficial() {
      this.deck_display_settings = "OFFICIAL";
      this.selectNone();

      this.available_decks.forEach((item) => {
        if (item.official) this.deckSelect(item);
      });
    },
    selectOnlyCustom() {
      this.deck_display_settings = "CUSTOM";
      this.selectNone();

      this.available_decks.forEach((item) => {
        if (!item.official) this.deckSelect(item);
      });
    },
    displayAll() {
      this.deck_display_settings = "ALL";
    },

    refreshAvailableDecks() {
      cardsApi.getDeckListCardsDeckGet((error, data, response) => {
        if (error) {
          console.error(error);
          console.error(response);
        } else {
          this.available_decks = JSON.parse(response.text).map((item) => ({
            ...item,
            isSelected: false,
          }));
          this.deckSelect(this.available_decks[0]);
        }
      });
    },
  },
};
</script>

<style>
.game_preference_form {
  border: rgb(37, 35, 35);
  padding: 30px;
}

.mode_selct_div {
  padding: 5px;
}
</style>