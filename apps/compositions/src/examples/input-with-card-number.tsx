"use client"

import { Input, InputGroup } from "@sh3yk0-ui/react"
import { LuCreditCard } from "react-icons/lu"
import { usePaymentInputs } from "react-payment-inputs"

export const InputWithCardNumber = () => {
  const { wrapperProps, getCardNumberProps } = usePaymentInputs()
  return (
    <InputGroup {...wrapperProps} endElement={<LuCreditCard />}>
      <Input {...getCardNumberProps()} />
    </InputGroup>
  )
}
