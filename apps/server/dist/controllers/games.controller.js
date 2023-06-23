import GameModel, { activeGames } from "../db/models/game.model.js";
import { nanoid } from "nanoid";
export const getGames = async (req, res) => {
    try {
        if (!req.query.id && !req.query.userid) {
            // get all active games
            res.status(200).json(activeGames.filter((g) => !g.unlisted && !g.winner));
            return;
        }
        let id, userid;
        if (req.query.id) {
            id = parseInt(req.query.id);
        }
        if (req.query.userid) {
            userid = parseInt(req.query.userid);
        }
        if (id && !isNaN(id)) {
            // get finished game by id
            const game = await GameModel.findById(id);
            if (!game) {
                res.status(404).end();
            }
            else {
                res.status(200).json(game);
            }
        }
        else if (userid && !isNaN(userid)) {
            // get finished games by user id
            const games = await GameModel.findByUserId(userid);
            if (!games) {
                res.status(404).end();
            }
            else {
                res.status(200).json(games);
            }
        }
        else {
            res.status(400).end();
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
export const getActiveGame = async (req, res) => {
    try {
        if (!req.params || !req.params.code) {
            res.status(400).end();
            return;
        }
        const game = activeGames.find((g) => g.code === req.params.code);
        if (!game) {
            res.status(404).end();
        }
        else {
            res.status(200).json(game);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
export const createGame = async (req, res) => {
    console.log(req.body);
    try {
        if (!req.body.user?.id) {
            console.log("unauthorized createGame");
            res.status(401).end();
            return;
        }
        const user = {
            id: req.body.user.id,
            name: req.body.user.name,
            connected: false,
        };
        const unlisted = req.body.unlisted ?? false;
        const game = {
            code: nanoid(6),
            unlisted,
            host: user,
            pgn: "",
        };
        if (req.body.side === "white") {
            game.white = user;
        }
        else if (req.body.side === "black") {
            game.black = user;
        }
        else {
            // random
            if (Math.floor(Math.random() * 2) === 0) {
                game.white = user;
            }
            else {
                game.black = user;
            }
        }
        activeGames.push(game);
        res.status(201).json({ code: game.code });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
