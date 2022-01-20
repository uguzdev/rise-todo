import { COLORS } from "../commons/constant";

export const getPriorityText = (priority: number) => {
  switch (priority) {
    case 0:
      return "Urgent";
    case 1:
      return "Regular";
    case 2:
      return "Trivial";
    default:
      break;
  }
};

export const getPriorityColor = (priority: number) => {
  switch (priority) {
    case 0:
      return COLORS.urgentPink;
    case 1:
      return COLORS.regularYellow;
    case 2:
      return COLORS.buttonBlue;
    default:
      break;
  }
};
