class AppError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message); // Call the parent Error class constructor
    this.status = status;
    this.name = "AppError"; // Set the error name for better debugging
    Error.captureStackTrace(this, this.constructor); // Capture the stack trace
  }
}

export default AppError;
