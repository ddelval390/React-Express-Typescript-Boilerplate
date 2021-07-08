const MONGOURI = process.env.MONGOURI || 'mongodb://mongo:27017/fin-tracker';
const PORT = process.env.PORT || 5000;
const SECRET = process.env.SECRET || 'super secret';

export {
    MONGOURI,
    PORT,
    SECRET
}