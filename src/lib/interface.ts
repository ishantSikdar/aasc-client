export interface simpleEventCard {
  _id: string;
  title: string;
  Description: string;
  currentSlug: string;
  titleImage: any;
  Date: Date;
}

export interface fullEvent {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
}
