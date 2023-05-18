import { Request, Response } from 'express';
import { pool } from '../db/connections';

export const getPeople = async (_req: any, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { msg: string; }): void; new(): any; }; }; }) => {
    try {
      const query = 'SELECT * FROM petition';
      const [data] = await pool.promise().query(query);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error al obtener personas' });
    }
  };


export const getPerson = (req: Request, res: Response) => {
    const { id } = req.params;

    pool.query('SELECT FROM petition WHERE id = ?', [id], (err: any, data: any) => {
        if(err) throw err;
        res.json({
            msg: 'Person has been deleted'

        })
    })

}

export const deletePeople = (req: Request, res: Response) => {
    const { id } = req.params;

    pool.query('DELETE FROM petition WHERE id = ?', [id], (err: any, data: any) => {
        if(err) throw err;
        res.json({
            msg: 'Person has been deleted'

        })
    })

}

export const postPeople = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: "postPeople",
        body: body
    })

}

export const putPeople = (req: Request, res: Response) => {
     const { body } = req;
     const { id } = req.params;


    res.json({
        msg: "putPeople",
        body: body,
        id: id
    })

}