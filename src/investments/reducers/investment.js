let basicInvestments = [
    {
        date: 1486723538159,
        courses: {
            start: 27.20,
            end: 26.50
        },
        ended: 1510321757000,
        amount: 100000,
        profit: 10236.00,
        instrument: 'oshad-deposit',
        type: 'deposit'
    },
    {
        date: 1491919651775,
        courses: {
            start: 26.85,
            end: 26.50
        },
        amount: 9000,
        ended: 1510321757000,
        profit: 719.00,
        instrument: 'oshad-deposit',
        type: 'deposit'
    },
    {
        date: 1470053564000,
        courses: {
            start: 24.81,
            end: 26.00
        },
        ended: 1497453036250,
        profit: 5367,
        amount: 100000,
        instrument: 'oshad-money',
        type: 'deposit'
    },
    {
        date: 1497453036250,
        courses: {
            start: 25.99,
            end: null
        },
        amount: 8525,
        instrument: 'oshad-money',
        type: 'deposit'
    },
    {
        date: 1497453036250,
        ended: 1513248221112,
        courses: {
            start: 26.00,
            end: 27.43
        },
        profit: 6256.00,
        amount: 100000,
        instrument: 'oshad-deposit2',
        type: 'deposit'
    },
    {
        date: 1510581535000,
        courses: {
            start: 26.49,
            end: 27.43
        },
        amount: 120000,
        ended: 1513248221112,
        profit: 1272.00,
        instrument: 'oshad-deposit2',
        type: 'deposit'
    },
    {
        date: 1513248221112,
        courses: {
            start: 27.43,
            end: null
        },
        amount: 227000,
        instrument: 'oshad-deposit3',
        type: 'deposit'
    },
    {
        date: 1510581535000,
        courses: {
            start: 26.49,
            end: null
        },
        amount: 1000,
        instrument: 'oshad-deposit3',
        type: 'deposit'
    },
    {
        date: 1489361671000,
        amount: 30000,
        courses: {
            start: 26.90,
            end: null
        },
        instrument: 'otp-shares',
        type: 'shares',
        start: {
            price: .93,
            count: 32043
        }//,
        // current:.93
    },
    {
        date: 1491919651775,
        courses: {
            start: 26.85,
            end: null
        },
        amount: 50000,
        instrument: 'otp-shares',
        type: 'shares',
        start: {
            course: 26.94,
            price: .98,
            count: 50303
        }//,
        // current:.93
    },
    {
        date: 1518625074634,
        courses: {
            start: 26.67,
            end: null
        },
        amount: 23400,
        instrument: 'otp-shares',
        type: 'shares',
        start: {
            price: 1.21,
            count: 19338
        }
    },
    {
        date: 1487144812000,
        courses: {
            start: 27.05,
            end: 26.79
        },
        amount: 21800,
        instrument: 'otp-classic',
        type: 'shares',
        start: {
            price: 2635.10,
            count: 8
        },
        ended: 1518451944605,
        ended_price: 3020.77,
        profit: 1619.00
    }
];

const investments = (state = basicInvestments, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default investments
