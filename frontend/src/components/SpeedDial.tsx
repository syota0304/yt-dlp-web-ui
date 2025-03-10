import {useState} from "react";
import {SpeedDialProps} from "@mui/material/SpeedDial/SpeedDial";
import {SpeedDial as SpeedDialBase} from '@mui/material'

const SpeedDial: React.FC<SpeedDialProps> = (props: SpeedDialProps) => {
  const [open, setOpen] = useState(false)

  return (
    <SpeedDialBase
      {...props}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={(_event, reason) => {
        if (reason !== "toggle") {
          setOpen(false)
        }
      }}
    />
  )
}

export default SpeedDial