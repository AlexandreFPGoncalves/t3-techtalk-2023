export interface UseNavigationState {
  currentStep: number;
}

export interface UseNavigationStoreOutput extends UseNavigationState {
  incrementCurrentStep(currentStep: number): void;
  decrementCurrentStep(currentStep: number): void;
}
