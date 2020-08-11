import { ReactNode } from 'react';

interface descriptionData {
  label: string;
  value: string;
}
export interface ChartDescriptionData {
  chartDescriptionData?: descriptionData[];
}

export interface Props {
  title: string;
  description: string;
  chartDescription?: ReactNode;
  chartLabels: string[];
  barColors?: string[];
  chartData: any;
  chartCardClass?: string;
  cardHeaderClass?: string;
}
