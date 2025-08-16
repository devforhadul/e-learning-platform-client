import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avator from '../../assets/react.svg'

export default function WAFloting() {
    return (
        <FloatingWhatsApp phoneNumber="+8801984839526"
            accountName="Learnisty" avatar={avator} />
    )
}
