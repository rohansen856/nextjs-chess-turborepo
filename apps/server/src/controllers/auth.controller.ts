import type { Request, Response } from "express"

export const getCurrentSession = async (req: Request, res: Response) => {
  try {
    if (req.session.user) {
      res.status(200).json(req.session.user)
    } else {
      res.status(204).end()
    }
  } catch (err: unknown) {
    console.log(err)
    res.status(500).end()
  }
}
