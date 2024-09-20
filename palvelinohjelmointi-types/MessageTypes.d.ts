import { MediaItem, UserWithNoPassword } from './DBTypes';
type MessageResponse = {
    message: string;
};
type ErrorResponse = MessageResponse & {
    stack?: string;
};
type MediaResponse = MessageResponse & {
    media: MediaItem | MediaItem[];
};
type LoginResponse = MessageResponse & {
    token: string;
    message: string;
    user: UserWithNoPassword;
};
type UserResponse = MessageResponse & {
    user: UserWithNoPassword;
};
type UserDeleteResponse = MessageResponse & {
    user: {
        user_id: number;
    };
};
type AvailableResponse = Partial<MessageResponse> & {
    available?: boolean;
};
type BooleanResponse = MessageResponse & {
    success: boolean;
};
type UploadResponse = MessageResponse & {
    data: {
        filename: string;
        media_type: string;
        filesize: number;
        screenshots?: string[];
    };
};
export type { MessageResponse, ErrorResponse, MediaResponse, LoginResponse, UploadResponse, UserResponse, UserDeleteResponse, AvailableResponse, BooleanResponse, };
