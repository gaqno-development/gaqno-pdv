

import { FeatureGuard } from '@gaqno-development/frontcore/components/guards'
import { FeatureModule, FeaturePermissionLevel } from '@gaqno-development/frontcore/types/user'

export function PdvLayout({ children }: { children: React.ReactNode }) {
  return (
    <FeatureGuard feature={FeatureModule.PDV} minRole={FeaturePermissionLevel.ACCESS}>
      {children}
    </FeatureGuard>
  )
}

