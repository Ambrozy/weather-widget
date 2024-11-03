import { memo } from "react";

import Warning from "../assets/Warning.svg";

import {
  ConditionsS,
  HeaderS,
  IconContainerS,
  LoaderS,
  LocationS,
  TemperatureS,
} from "./AppHeader.styles.ts";
import { formatTemperature } from "./utils/formatTemperature.ts";

interface AppHeaderProps {
  isError: boolean;
  isLoading: boolean;
  locationName: string;
  temperature: number;
  conditions: string;
  minTemperature: number;
  maxTemperature: number;
}

export const AppHeader = memo(
  ({
    isError,
    isLoading,
    locationName,
    temperature,
    conditions,
    minTemperature,
    maxTemperature,
  }: AppHeaderProps) => (
    <HeaderS>
      <LocationS>
        {locationName}
        {isError && (
          <IconContainerS>
            <Warning />
          </IconContainerS>
        )}
        {isLoading && (
          <IconContainerS>
            <LoaderS />
          </IconContainerS>
        )}
      </LocationS>
      <ConditionsS>
        <TemperatureS>{formatTemperature(temperature)}</TemperatureS>
        <div>{conditions}</div>
        H:{formatTemperature(maxTemperature)}
        L: {formatTemperature(minTemperature)}
      </ConditionsS>
    </HeaderS>
  ),
);
