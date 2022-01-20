import { COLORS, PRIORITY } from "../commons/constant";

export const getPriorityText = (priority: number) => {
  switch (priority) {
    case PRIORITY.URGENT:
      return "Urgent";
    case PRIORITY.REGULAR:
      return "Regular";
    case PRIORITY.TRIVIAL:
      return "Trivial";
    default:
      break;
  }
};

export const getPriorityColor = (priority: number) => {
  switch (priority) {
    case PRIORITY.URGENT:
      return COLORS.urgentPink;
    case PRIORITY.REGULAR:
      return COLORS.regularYellow;
    case PRIORITY.TRIVIAL:
      return COLORS.buttonBlue;
    default:
      break;
  }
};
