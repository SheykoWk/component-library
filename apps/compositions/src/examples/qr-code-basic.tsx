import { QrCode } from "@sh3yk0-ui/react"

export const QrCodeBasic = () => {
  return (
    <QrCode.Root value="https://www.google.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  )
}
