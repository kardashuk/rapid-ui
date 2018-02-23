let basicTools = [
    {
        id:'dollar'
    },
    {
        id:'otp-shares',
        bank: 'OTP-capital',
        name: 'Shares',
        type: 'shares',
        tax: 19.5,
        franchise: 200,
        commission: {
            percent:1,
            min: 400
        }
    },
    {
        id:'otp-classic',
        bank: 'OTP-capital',
        name: 'Classic',
        type: 'shares',
        tax: 19.5,
        franchise: 700, //200+500 for account
        commission: {
            percent:.5,
            min:200
        }
    },
    {
        id:'oshad-deposit',
        bank: 'OschadBank',
        name: '17%',
        type: 'My deposit 17/9',
        percentage: 17,
        payType: 'end',
        time: '9m',
        tax: 19.5,
        commission: {
            percent: 0.0,
            min: 0
        }
    },
    {
        id:'oshad-deposit2',
        bank: 'OschadBank',
        name: '15.5%',
        type: 'My deposit 15',
        percentage: 15.5,
        payType: 'end',
        time: '6m',
        tax: 19.5,
        commission: {
            percent: 0.0,
            min: 0
        }
    },
    {
        id:'oshad-deposit3',
        bank: 'OschadBank',
        name: '14.5%',
        type: 'My deposit 14',
        percentage: 14.5,
        payType: 'end',
        time: '6m',
        tax: 19.5,
        commission: {
            percent: 0.0,
            min: 0
        }
    },
    {
        id:'oshad-money',
        bank: 'OschadBank',
        name: '8%',
        type: 'Money 8',
        percentage: 8,
        payType: 'month',
        time: '1m',
        tax: 19.5,
        commission: {
            percent: 0,
            min: 0
        }
    }
];

const tools = (state = basicTools, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default tools