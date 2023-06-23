export const getCurrentSession = async (req, res) => {
    try {
        if (req.session.user) {
            res.status(200).json(req.session.user);
        }
        else {
            res.status(204).end();
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
