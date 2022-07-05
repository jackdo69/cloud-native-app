import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { ApiGateway } from "./ApiGateway";
import { Dynamo } from "./Dynamo";
import { Lambda } from "./Lambda";

export class CloudNativeAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    //Api Gateway
    const api = new ApiGateway(this);

    // Database
    new Dynamo(this);

    //Lambdas
    const healthLambda = new Lambda(this, "health");
    const createTodo = new Lambda(this, "createTodo");
    const getTodo = new Lambda(this, "getTodo");
    const updateTodo = new Lambda(this, "updateTodo");
    const deleteTodo = new Lambda(this, "deleteTodo");

    api.addIntegration("GET", "/health", healthLambda);
    api.addIntegration("POST", "/todo", createTodo);
    api.addIntegration("GET", "/todo", getTodo);
    api.addIntegration("POST", "/todo/{id}", updateTodo);
    api.addIntegration("DELETE", "/todo/{id}", deleteTodo);
  }
}
