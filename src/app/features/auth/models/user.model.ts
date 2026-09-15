export interface UserResponseModel{
    id: number;
    username: string;
    email: string;
    token: string;
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