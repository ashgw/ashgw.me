import { captureException as sentryCaptureException } from "@sentry/nextjs";

import { logger } from "../../log";

type Exception = Parameters<typeof sentryCaptureException>[0];
type Hint = Parameters<typeof sentryCaptureException>[1];

/**
 * Captures an exception and logs it using Sentry and a centralized logger.
 *
 * @param {Object} params - The parameters for capturing the exception.
 * @param {Exception} params.error - The error to be captured.
 * @param {Hint} [params.hint] - Optional hint for additional context.
 * @param {Object} [params.withErrorLogging] - Optional object for logging additional error messages.
 * @param {string} params.withErrorLogging.message - The message to log if provided.
 * @returns {string} The extracted error message.
 */
export const captureException = ({
  error,
  hint,
  withErrorLogging,
}: {
  error: Exception;
  hint?: Hint;
  withErrorLogging?: { message: string };
}): string => {
  const errorMessage = extractErrorMessage(error);
  try {
    sentryCaptureException(error, hint);
    if (withErrorLogging) {
      logger.error(withErrorLogging.message);
    } else {
      logger.error(`${errorMessage}`);
    }
  } catch (ce) {
    logger.error("CANNOT CAPTURE SENTRY EXCEPTION:", ce);
  }
  return errorMessage;
};

const extractErrorMessage = (exception: Exception): string => {
  if (exception instanceof Error) {
    return exception.message;
  } else if (
    exception &&
    typeof exception === "object" &&
    "message" in exception
  ) {
    return exception.message as string;
  }
  return String(exception);
};
