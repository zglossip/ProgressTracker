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
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ChartCard :data="chartData" :options="options" />
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-text>
                                <span>Begin Date</span>
                            </ion-text>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-datetime display-format="MMM DD, YYYY HH:mm" picker-format="MMM DD, YYYY HH:mm" v-model="beginDate"></ion-datetime>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-text>
                                <span>End Date</span>
                            </ion-text>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-datetime display-format="MMM DD, YYYY HH:mm" picker-format="MMM DD, YYYY HH:mm" v-model="endDate"></ion-datetime>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
    import ChartCard from '@/components/ChartCard'
    import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonRow, IonCol, IonGrid, IonDatetime, IonText } from '@ionic/vue';
    import { generateId } from '@/util/util';

    export default {
        components: {
            ChartCard, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonRow, IonCol, IonGrid, IonDatetime, IonText
        },
        computed: {
            titleId() {
                return generateId('chart', 'title')
            }
        },
        data() {
            const curDate = new Date()
            const prevDate = new Date()
            prevDate.setFullYear(curDate.getFullYear() - 1)
            return {
                beginDate: curDate.toISOString(),
                endDate: prevDate.toISOString(),
                chartData: {
                    datasets: [{
                        data: [
                            { x: '2016-12-26', y: 10 },
                            { x: '2016-12-27', y: 14 },
                            { x: '2016-12-28', y: 16 },
                            { x: '2016-12-30', y: 13 },
                            { x: '2016-12-31', y: 16 },
                            { x: '2017-01-01', y: 10 }
                        ],
                        borderColor: 'rgb(140,25,255)'
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: "time",
                            display: true,
                            time: {
                                unit: 'day'
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false
                    }
                }
            }
        }
    }
</script>