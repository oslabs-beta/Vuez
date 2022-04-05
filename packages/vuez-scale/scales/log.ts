import { scaleLog } from "d3-scale";
// import { DefaultOutput } from '../types/Base';
// import { PickScaleConfigWithoutType } from '../types/ScaleConfig';
import scaleOperator from "../operators/scaleOperator";

export const updateLogScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "base",
  "clamp",
  "interpolate",
  "nice",
  "round"
);

export default function createLogScale(
  config?: any
  //config?: PickScaleConfigWithoutType<'log', Output>,
) {
  return updateLogScale(scaleLog(), config);
}
