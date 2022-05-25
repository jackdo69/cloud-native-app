#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CloudNativeAppStack } from '../lib/cloud-native-app-stack';

const app = new cdk.App();
new CloudNativeAppStack(app, 'CloudNativeAppStack', {});