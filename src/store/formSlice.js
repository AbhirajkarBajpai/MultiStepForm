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
  },
})

export const { setStep, updatePersonalInfo, updatePlan } = formSlice.actions
export default formSlice.reducer

