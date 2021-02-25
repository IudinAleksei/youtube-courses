const VueApp = {
  data() {
    return {
      form: {
        name: '',
        value: '',
      },
    };
  },
  methods: {
    createContact() {
      console.log(this.form);
    },
  },
};

Vue.createApp(VueApp).mount('#app');
