module.exports.events = [
    {
      date: '2019-09-10',
      type: 'taxes',
      label: 'Отправить сведения о сделке',
      number: 'Номер',
      id: '34534576',
      modified: '2019-09-15T12:45:00',
      created: '2019-09-15T12:46:00',
      comments: [
        {
          id: '53534534',
          text: 'Consectetur adipiscing elit.',
          time: '2019-09-15T12:45:00'
        },
        {
          id: '87423443',
          text: 'Lorem ipsum dolor sit amet.',
          time: '2019-09-15T12:45:00'
        }
      ]
    },
    {
      date: '2019-09-12',
      type: 'bank',
      label: 'Отправить сведения о сделке',
      number: 'Номер',
      id: '454564456',
      created: '2019-09-15T12:45:00'
    },
    {
      date: '2019-09-01',
      type: 'taxes',
      label: 'Отправить сведения о сделке',
      number: 'Номер',
      id: '9769789645',
      created: '2019-09-15T12:45:00',
      comments: [
        {
          id: '45324784',
          text: 'Consectetur adipiscing elit.',
          time: '2019-09-19T16:45:00'
        }
      ]
    }
]

module.exports.settings = {
    bank: {
        requisites: '',
        account: '',
        operatorName: ''
    },
    taxes: {
        organizationType: '',
        bank: '',
        taxSchema: '',
        accountNumber: '',
        inspectorPhone: ''
    },
    tasks: {
        firstName: '',
        lastName: '',
        phone: '',
        accountNumber: '',
        UNP: ''
    }
}