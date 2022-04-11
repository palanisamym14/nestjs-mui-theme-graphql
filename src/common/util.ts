import * as bcrypt from 'bcrypt';

export const compareHash = (password, hash) => bcrypt.compareSync(password, hash);

export const passwordHash = (password)=> {
    const saltOrRounds = 10;
    return bcrypt.hash(password, saltOrRounds);
}