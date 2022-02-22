
const monApp = Vue.createApp({
    data() {
        return {
            nbr: 0
        };
    },

    methods: {
        addNbr(){
            if(this.nbr < 7) {
                return 'ESSAIE ENCORE !';
            } else if(this.nbr == 7) {
                return 'Yahoo !';
            } else {
                return 'tu as dépassé le NB Mystère';
            }
        }
    },

    watch: {
        refreshPage(){
            if(this.nbr === this.nbr){
                setTimeout(() => {
                Location.reload()
                }, 5000);
            }
        }
    }
});

monApp.mount('#app');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               