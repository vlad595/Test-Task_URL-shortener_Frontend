export interface UserResponseModel{
    id: number;
    username: string;
    email: string;
    token: string;
    role: number;
}

export interface UserLoginModel{
    email: string;
    password: string;
}

export interface UserRegistrationModel{
    username: string;
    email: string;
    password: string;
}