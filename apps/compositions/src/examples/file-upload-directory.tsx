import { Button, FileUpload } from "@sh3yk0-ui/react"
import { HiUpload } from "react-icons/hi"

export const FileUploadDirectory = () => {
  return (
    <FileUpload.Root directory>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm">
          <HiUpload /> Upload file
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
  )
}
