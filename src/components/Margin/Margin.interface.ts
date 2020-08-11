interface Margin {
  label: string;
  plan: string;
  actual: string;
}

export interface Props {
  title: string;
  description: string;
  planName: string;
  actualName: string;
  marginData?: Margin[];
}
