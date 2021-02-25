const VueApp = {
  data() {
    return {
      form: {
        name: '',
        value: '',
      },
      contacts: [
        { id: 1, name: 'Ivan', value: '+7-900-000-00-00', marked: false },
      ],
    };
  },
  computed: {
    canCreate() {
      return this.form.name.trim() && this.form.value.trim();
    },
  },
  methods: {
    createContact() {
      const { ...contact } = this.form;
      this.contacts.push({ ...contact, id: Date.now(), marked: false });

      this.form.name = this.form.value = '';
    },

    markContact(id) {
      const contact = this.contacts.find((c) => c.id === id);
      contact.marked = true;
    },

    removeContact(id) {
      this.contacts = this.contacts.filter((c) => c.id !== id);
    },
  },
};

Vue.createApp(VueApp).mount('#app');
