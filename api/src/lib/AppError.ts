class AppError extends Error {
  public status: number; // HTTP status code

  constructor(message: string, status: number) {
    super(message); // Call the parent `Error` constructor
    this.status = status; // Assign the status code
    this.name = this.constructor.name; // Set the error name to the class name
    Error.captureStackTrace(this, this.constructor); // Capture stack trace for debugging
  }
}

export default AppError;
