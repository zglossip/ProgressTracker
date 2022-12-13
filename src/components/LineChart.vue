<script>
    import { Line } from 'vue3-chart-v2'
    
    export default {
        extends: Line,
        props: {
            options: Object,
            data: Object
        },
        mounted() {
            this.renderChart(this.data, this.options)
        }
    }
</script>