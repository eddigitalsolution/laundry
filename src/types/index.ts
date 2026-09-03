export type ProcessStageId = 'DIRTY' | 'WASH' | 'DRY' | 'FOLD' | 'CLEAN';

export interface ProcessStage {
  id: ProcessStageId;
  label: string;
  subLabel: string;
  stepNumber: string;
  description: string;
  technicalDetails: string;
  metrics: { label: string; value: string }[];
  visualTheme: {
    badgeBg: string;
    badgeText: string;
    shirtStateName: string;
    accentColor: string;
  };
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  category: string;
  turnaround: string;
  pricePerKgOrItem: string;
  description: string;
  features: string[];
}

export interface PricingCalculatorItem {
  id: string;
  name: string;
  unitPrice: number;
  unit: string;
  count: number;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  pickupDate: string;
  timeSlot: string;
  serviceType: string;
  estimatedWeightKg: number;
  specialInstructions: string;
}
