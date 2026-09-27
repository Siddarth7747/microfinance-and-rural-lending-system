import { ROLES } from './constants';

export const canApproveLoan = (userRole) => {
  return [ROLES.ADMIN, ROLES.BRANCH_MANAGER, ROLES.CREDIT_COMMITTEE].includes(userRole);
};
