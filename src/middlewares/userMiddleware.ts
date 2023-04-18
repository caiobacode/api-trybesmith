import { Request, Response, NextFunction } from 'express';

function authString(ramdomString: string, thisString: string, ch: number) {
  if (!ramdomString) {
    return { type: 400, message: `"${thisString}" is required` };
  }
  if (typeof ramdomString !== 'string') {
    return { type: 422, message: `"${thisString}" must be a string` };
  }
  if (ramdomString.length < ch) {
    return { type: 422, message: `"${thisString}" length must be at least ${ch} characters long` };
  }
  return { type: 200, message: 'success' };
}

function authLevel(level: number) {
  if (level === undefined) {
    return { type: 400, message: '"level" is required' };
  }
  if (typeof level !== 'number') {
    return { type: 422, message: '"level" must be a number' };
  }
  if (level < 1) {
    return { type: 422, message: '"level" must be greater than or equal to 1' };
  }
  return { type: 200, message: 'success' };
}

async function authUserFields(req: Request, res: Response, next: NextFunction) {
  const { username, vocation, password, level } = req.body;
  if (authString(username, 'username', 3).type !== 200) {
    const { type, message } = authString(username, 'username', 3);
    return res.status(type).json({ message });
  }

  if (authString(vocation, 'vocation', 3).type !== 200) {
    const { type, message } = authString(vocation, 'vocation', 3);
    return res.status(type).json({ message });
  }

  if (authString(password, 'password', 8).type !== 200) {
    const { type, message } = authString(password, 'password', 8);
    return res.status(type).json({ message });
  }

  if (authLevel(level).type !== 200) {
    const { type, message } = authLevel(level);
    return res.status(type).json({ message });
  }
  next();
}

export default authUserFields;