import { useAppSelector } from './useAppSelector';
import { ROLES_WITH_PHASE_CHANGE } from '../features/auth';

export function usePhasePermissions() {
  const role = useAppSelector((s) => s.auth.role);
  return {
    canChangePhaseStatus: ROLES_WITH_PHASE_CHANGE.includes(role),
  };
}
