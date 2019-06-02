/* Custom implementation of POST /signin end-point */

const TOKEN = 'mock';

const signinPost = (req, res) => {
    const response = {
        token : TOKEN,
    };
    res.send(
        JSON.stringify(response)
    );
};

export default signinPost;
