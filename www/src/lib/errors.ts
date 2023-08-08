export class APIError extends Error {
    status: number;
    message: string;
    response: string;

    constructor(status: number, message: string, response: string) {
        super(`[${status}] ${message}`);

        this.status = status;
        this.message = message;
        this.response = response;
    }
}
