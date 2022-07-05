import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { container } from "../ioc/container";
import { ContainerKeys } from "../ioc/keys";
import { ILoggerService } from "../services/logger.service";

const logger: ILoggerService = container.get(ContainerKeys.ILoggerService);

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  logger.log("health lambda executed", event);

  return {
    body: "OK",
    statusCode: 200
  };
};
