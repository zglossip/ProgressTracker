<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title :id="titleId">Progress Tracker</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Progress Tracker</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
          <ion-list>
              <ion-item v-if="charts.length === 0">
                  <ion-label :id="emptyId">
                      No charts found.
                  </ion-label>
              </ion-item>
              <list-item v-else v-for="item in charts" :item="item" :key="item.id"></list-item>
          </ion-list>
          <ion-fab vertical="bottom" horizontal="end" slot="fixed">
              <ion-fab-button :id="addId">
                  <ion-icon :icon="add"></ion-icon>
              </ion-fab-button>
              <ion-fab-list side="start">
                  <ion-fab-button href="/addEntry"><ion-icon :icon="create"></ion-icon></ion-fab-button>
                  <ion-fab-button href="/addChart"><ion-icon :icon="trendingUp"></ion-icon></ion-fab-button>
              </ion-fab-list>
          </ion-fab>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import ListItem from '@/components/ListItem';
    import { generateId } from '@/util/util'
    import { add, create, trendingUp } from 'ionicons/icons';

export default defineComponent({
    name: 'Home',
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonList,
        ListItem,
        IonLabel,
        IonItem,
        IonFab,
        IonFabButton,
        IonIcon,
        IonFabList
    },
    data() {
        return {
            charts: [{
                id: 1,
                title: 'Test Name',
                description: 'This is a test description'
            }]
        }
    },
    computed: {
        titleId() {
            return generateId('home', 'title')
        },
        emptyId() {
            return generateId('home', 'empty')
        },
        addId() {
            return generateId('home', 'add-button')
        }
    },
    methods: {
        createChart() {

        }
    },
    setup() {
        return { add, create, trendingUp }
    }
});
</script>