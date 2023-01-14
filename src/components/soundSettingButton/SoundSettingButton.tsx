import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import DisableSoundIcon from '../../assets/icons/disable-sound-icon.svg'
import EnableSoundIcon from '../../assets/icons/enable-sound-icon.svg'
import { useSoundSetting } from '../../store/soundSetting/useSoundSetting'
import { Button } from '../button/Button'

export const SoundSettingButton = (): ReactElement => {
  const [soundEnabled, setSoundEnabled] = useSoundSetting()

  const onClick = useCallback(() => {
    setSoundEnabled(!soundEnabled)
  }, [setSoundEnabled, soundEnabled])

  return (
    <StyledButton type="button" kind="secondary" onClick={onClick}>
      {soundEnabled ? <DisableSoundIcon /> : <EnableSoundIcon />}
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  width: auto;
`
