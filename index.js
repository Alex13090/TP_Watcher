
const monApp = Vue.createApp({
    data() {
        return {
            nbr: 0
        };
    },

    computed: {
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
        nbr(value){
            setTimeout(() => {
                this.nbr = 0
            }, 5000);
        }    
    }
});

monApp.mount('#app');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               