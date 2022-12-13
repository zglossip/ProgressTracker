<template>
    <ion-card>
        <ion-card-content>
            <LineChart :data="data" :options="options" :height="250"/>
        </ion-card-content>
    </ion-card>
</template>

<script>
    import { IonCard, IonCardContent } from '@ionic/vue';
    import LineChart from '@/components/LineChart'
    export default {
        components: {
            IonCard, IonCardContent, LineChart
        },
        props: {
            data: Object,
            options: Object
        }
    }
</script>