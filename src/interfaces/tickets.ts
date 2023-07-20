export interface Ticket {
  distributor: string;
  type: TicketType;
  event: string;
  date: Date;
  quantity: number;
}

enum TicketType {
  CONCERT = "CONCERT",
  MOVIE = "MOVIE",
  THEATER = "THEATER",
  CONFERENCE = "CONFERENCE",
}
