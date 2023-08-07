import axios from 'axios';

const handler = async (event, context) => {
    const listId = '081e7a3742';
    const apiKey = '59f123cec8b6ce49c33779e442233dc3-us21';
    const url = 'https://us21.api.mailchimp.com/3.0/lists"'
    const body = JSON.parse(event.body);
    const { email_address } = body;
    
    if (!email_address) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Please provide an email address.' }),
        }
    }

    try {
        const payload = {
            email_address,
            status: 'subscribed',
        }
        const { data } = await axios.post(`${url}/${listId}/members`, payload, {
            headers: {
                Authorization: `Basic ${apiKey}`,
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        }
    }
};

export {
    handler,
}