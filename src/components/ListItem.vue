<template>
    <ion-item :href="url" :id="computedId('item')" detail>
        <ion-label>
            <ion-text>
                <h1 :id="computedId('title')">
                    {{item.title}}
                </h1>
            </ion-text>
            <ion-text>
                <p :id="computedId('description')">
                    {{item.description}}
                </p>
            </ion-text>
        </ion-label>
    </ion-item>
</template>

<script>
    import { defineComponent } from 'vue';
    import { IonItem, IonLabel, IonText } from '@ionic/vue';
    export default defineComponent ( {
        components: {
            IonItem, IonLabel, IonText
        },
        props: {
            item: Object
        },
        computed: {
            url() {
                return '/chart/id/' + this.item.id
            }
        },
        methods: {
            computedId(type) {
                if (this.item)
                    return 'pt-' + type + '-' + this.item.id
                else
                    return '';
            }
        }
    })
</script>