import { pool } from "../db/db.js";

export const getUsers = (req,res) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            res.status(500).json({ msg: error, users: []});
            return;
        }
        res.status(200).json({msg: "OK", users: results});
    });
};

export const getUser = (req,res) => {
    const id = req.params.id;
    pool.execute('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
        if (error) {
            res.status(500).json({ msg: error, users: []});
            return;
        }
        res.status(200).json({msg: "OK", user: results});
    });
};

export const postUser = (req,res) => {
    const { name, username, password, age } = req.body;
    //console.log
    //res.json({});
    pool.execute(
        'insert into users (name, username, password, age) values (?,?,?,?)', 
        [name, username, password, age], 
        (error, results) => {
        if (error) {
            res.status(500).json({ msg: error, users: []});
            return;
        }
        res.status(200).json({msg: "OK", user: results});
    });
};

/*
pool.execute('SELECT * FROM users WHERE username = ?',
    [usermane], 
    (error, results) => {
    if (error) {
        res.status(500).json({ msg: error, users: []});
        return;
    }
    res.status(200).json({msg: "OK", user: results});
});
*/

export const putUser = (req,res) => {
    const { name, username, password, age } = req.body;
    //console.log
    //res.json({});
    pool.execute(
        'update users set name=?, username=?, password=?, age=?', 
        [name, username, password, age, req.params.id], 
        (error, results) => {
        if (error) {
            res.status(500).json({ msg: error, users: []});
            return;
        }
        res.status(200).json({msg: "OK", user: results});
    });
    //res.json({ id: req.params.id }); // accedes a un id
};

export const deleteUser = (req,res) => {
    pool.execute(
        'DELETE FROM users WHERE id = ?', 
        [req.params.id], 
        (error, results) => {
        if (error) {
            res.status(500).json({ msg: error, users: []});
            return;
        }
        res.status(200).json({msg: "OK", user: results});
    });
};


export const login = (req,res) => {
    const { username, password } = req.body;
    pool.execute(
        'SELECT * FROM users WHERE username = ?', 
        [username], 
        (error, results) => {
        if (error) {
            res.status(500).json({ msg: error, users: []});
            return;
        }
        if (results.length < 1) {
            res
            .status(401)
            .json({ isLogin: false, msg: "credenciales invalidas", user: {} });
            return;
        }
        if (results[0].password === password) {
            res.status(200).json({ isLogin: true, msg: "OK", user: results[0]});
        } else {
            res
            .status(401)
            .json({ isLogin: false, msg: "credenciales invalidas", user: {} });
        }
        
    });
};




