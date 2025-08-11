import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    eventName: '',
    eventType: '',
    guests: '',
    budget: '',
    location: '',
    date: '',
    additionalInfo: '',
  },
  currentStep: 0,
  showVendorScreen: false,
  selectedVendors: [],
};

const eventPlanningSlice = createSlice({
  name: 'eventPlanning',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    goToNextStep: (state) => {
      state.currentStep += 1;
    },
    goToPreviousStep: (state) => {
      if (state.currentStep > 0) state.currentStep -= 1;
    },
    showVendorScreenAction: (state) => {
      state.showVendorScreen = true;
    },
    backToFormAction: (state) => {
      state.showVendorScreen = false;
    },
    addSelectedVendor: (state, action) => {
      if (!state.selectedVendors.includes(action.payload)) {
        state.selectedVendors.push(action.payload);
      }
    },
    resetEventPlanning: () => initialState,
  },
});

export const {
  setFormData,
  goToNextStep,
  goToPreviousStep,
  showVendorScreenAction,
  backToFormAction, // ← ✅ ensure this line exists
  addSelectedVendor,
  resetEventPlanning,
} = eventPlanningSlice.actions;

export default eventPlanningSlice.reducer;
