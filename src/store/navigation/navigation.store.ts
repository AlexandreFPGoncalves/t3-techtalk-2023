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
      incrementCurrentStep: function () {
        set(
          produce((state: UseNavigationState) => ({
            ...state,
            // currentStep: {...state, currentStep: currentStep},
          })),
          false,
          "incrementCurrentStep",
        );
      },
      decrementCurrentStep: function () {
        set(
          produce((state: UseNavigationState) => ({
            ...state,
            currentStep: (this.currentStep -= 1),
          })),
          false,
          "decrementCurrentStep",
        );
      },
    }),
    "NavigationStore",
  );
