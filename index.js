
const monApp = Vue.createApp({
    data() {
        return {
            nbr: 0,
            // secretNbr: Math.round(Math.random() * 100)
        };
    },

    methods: {
        addNbr(num){
            this.nbr += num;
        }
    },

    computed: {
        checkNbr(){
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
            if(value) {
                console.log('watch');
                setTimeout(() => {
                    this.nbr = 0;
                }, 5000);
            }
        }    
    }
});

monApp.mount('#app');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               