import { User } from './entities/auth.entity';

export const USERS = 'USER_REPOSITORY'
export const UserProviders = [
    {
        provide: USERS,
        useValue: User,
    }
]