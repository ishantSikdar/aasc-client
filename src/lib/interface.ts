export interface SimpleEventCard {
  _id: string;
  title: string;
  description: string;
  currentSlug: string;
  titleImage: any;
  date: Date;
}

export interface FullEvent {
  _id: string,    
  title: string,
  Description: string,
  Date: Date,
  PDF: any,
  titleImage: any,
  Link: string,
  venue: string,
}



