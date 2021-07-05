<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Progress Tracker</ion-title>
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

          </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/vue';
    import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonList
    },
    data() {
        return {
            item: {
                title: 'Test Title',
                description: 'Test item'
            }
        }
    }
});
</script>