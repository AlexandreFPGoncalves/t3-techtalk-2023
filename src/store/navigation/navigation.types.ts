export interface UseNavigationState {
  currentStep: number;
}

export interface UseNavigationStoreOutput extends UseNavigationState {
  incrementCurrentStep(): void;
  decrementCurrentStep(): void;
}
