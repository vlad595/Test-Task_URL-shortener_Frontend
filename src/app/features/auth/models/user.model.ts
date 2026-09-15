export interface UserResponseModel{
    id: number;
    name: string;
    email: string;
    token: string;
}

export interface UserLoginModel{
    email: string;
    password: string;
}

export interface UserRegistrationModel{
    name: string;
    email: string;
    password: string;
}