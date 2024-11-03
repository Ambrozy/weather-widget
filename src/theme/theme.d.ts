export interface Theme {
  /** Application background */
  background: string;
  /** Text color */
  color: string;
  /** Text color that a bit faded (used in range for minimum temperature) */
  fadedColor: string;
  /** Divider between forecast items */
  divider: string;
  /** Text color of precipitation probability in daily forecast */
  precipitationProbabilityColor: string;
  /** Panel component styles */
  panel: {
    /** Panel background */
    background: string;
  };
  /** Range component styles */
  range: {
    /** Border color of current marker */
    markerBorderColor: string;
    /** Background of range meter */
    meterBackground: string;
  };
}
