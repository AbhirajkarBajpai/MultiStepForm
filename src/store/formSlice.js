import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentStep: 1,
  formData: {
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    plan: {
      type: "arcade",
      billing: "monthly",
    },
    addons: {
      onlineService: true,
      largerStorage: true,
      customizableProfile: false,
    },
  },
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload
    },
    updatePersonalInfo: (state, action) => {
      state.formData.personalInfo = { ...state.formData.personalInfo, ...action.payload }
    },
    updatePlan: (state, action) => {
      state.formData.plan = { ...state.formData.plan, ...action.payload }
    },
    updateAddons: (state, action) => {
      state.formData.addons = { ...state.formData.addons, ...action.payload }
    },
  },
})

export const { setStep, updatePersonalInfo, updatePlan, updateAddons } = formSlice.actions
export default formSlice.reducer

