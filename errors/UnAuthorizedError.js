import { statusCodes } from "http-status-codes";
import CustomAPIError from "./customAPIError.js";

class UnAuthorized extends CustomAPIError {
  constructor(message) {
    super(message);

    this.statusCode = statusCode.UNAUTHORIZED;
  }
}
export default BadRequestError;
