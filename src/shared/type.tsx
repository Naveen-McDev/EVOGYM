// nav links
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

// benefits type
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

// class typs
export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
