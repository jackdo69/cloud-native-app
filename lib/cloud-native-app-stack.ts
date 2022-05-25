import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ApiGateway } from './ApiGateway';
import { Lambda } from './Lambda';

export class CloudNativeAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    //Api Gateway
    const api = new ApiGateway(this);

    //Lambdas
    const healthLambda = new Lambda(this, "health");

    api.addIntegration("GET", "/health", healthLambda);
  }
}
