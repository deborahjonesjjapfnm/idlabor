type SendState = {
    // Properties and methods specific to SendState
    status: string;
    message: string;
    // ...
};

// Aliasing SendState as CommonSendState
type CommonSendState = SendState;

// Usage example
let state: CommonSendState = {
    status: "success",
    message: "Message sent successfully"
};
