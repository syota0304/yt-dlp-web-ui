import DownloadIcon from '@mui/icons-material/Download'
import SettingsEthernet from '@mui/icons-material/SettingsEthernet'
import { AppBar, CircularProgress, Divider, Toolbar } from '@mui/material'
import { Suspense } from 'react'
import { settingsState } from '../atoms/settings'
import { connectedState } from '../atoms/status'
import { totalDownloadSpeedState } from '../atoms/ui'
import { useI18n } from '../hooks/useI18n'
import { formatSpeedMiB } from '../utils'
import FreeSpaceIndicator from './FreeSpaceIndicator'
import VersionIndicator from './VersionIndicator'
import { useAtomValue } from 'jotai'

const Footer: React.FC = () => {
  const settings = useAtomValue(settingsState)
  const isConnected = useAtomValue(connectedState)
  const totalDownloadSpeed = useAtomValue(totalDownloadSpeedState)

  const mode = settings.theme
  const { i18n } = useI18n()

  return (
    <AppBar position="fixed" color="default" sx={{
      top: 'auto',
      bottom: 0,
      height: 48,
      zIndex: 1200,
      borderTop: mode === 'light'
        ? '1px solid rgba(0, 0, 0, 0.12)'
        : '1px solid rgba(255, 255, 255, 0.12)',
    }}>
      <Toolbar sx={{
        paddingBottom: 2,
        fontSize: 14,
        display: 'flex',
        gap: 1,
        justifyContent: 'space-between',
        overflow: 'auto',
      }}>
        <div style={{ display: 'flex', gap: 8, 'alignItems': 'center' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 3
          }}>
            <DownloadIcon />
            <span style={{
              whiteSpace: 'nowrap'
            }}>
              {formatSpeedMiB(totalDownloadSpeed)}
            </span>
          </div>
          <Divider orientation="vertical" flexItem />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 3
          }}>
            <SettingsEthernet />
            <span style={{
              whiteSpace: 'nowrap'
            }}>
              {isConnected ? settings.serverAddr : i18n.t('notConnectedText')}
            </span>
          </div>
          <Divider orientation="vertical" flexItem />
          <Suspense fallback={i18n.t('loadingLabel')}>
            <FreeSpaceIndicator />
          </Suspense>
        </div>
        <Suspense fallback={<CircularProgress size={15} />}>
          <VersionIndicator />
        </Suspense>
      </Toolbar>
    </AppBar>
  )
}

export default Footer