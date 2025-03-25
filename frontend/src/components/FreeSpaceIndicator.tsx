import StorageIcon from '@mui/icons-material/Storage'
import { freeSpaceBytesState } from '../atoms/status'
import { formatSize } from '../utils'
import { useAtomValue } from 'jotai'

const FreeSpaceIndicator = () => {
  const freeSpace = useAtomValue(freeSpaceBytesState)

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 3
    }}>
      <StorageIcon />
      <span style={{
        whiteSpace: 'nowrap'
      }}>
        {formatSize(freeSpace)}
      </span>
    </div>
  )
}

export default FreeSpaceIndicator