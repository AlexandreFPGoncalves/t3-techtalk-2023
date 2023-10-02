/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import produce from "immer";
import { StoreHelper } from "../storeHelper";
import type {
  UseNavigationState,
  UseNavigationStoreOutput,
} from "./navigation.types";

export const initialNavigationState: UseNavigationState = {
  currentStep: 0,
};

export const useNavigationStore =
  StoreHelper.createStore<UseNavigationStoreOutput>(
    (set) => ({
      ...initialNavigationState,
      incrementCurrentStep: function (currentStep: number) {
        set(
          produce((state: UseNavigationState) => ({
            ...state,
            currentStep: (currentStep += 1),
          })),
          false,
          "incrementCurrentStep",
        );
      },
      decrementCurrentStep: function (currentStep: number) {
        set(
          produce((state: UseNavigationState) => ({
            ...state,
            currentStep: (currentStep -= 1),
          })),
          false,
          "decrementCurrentStep",
        );
      },
    }),
    "NavigationStore",
  );
