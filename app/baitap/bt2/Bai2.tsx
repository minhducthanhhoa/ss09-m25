import React from 'react'
import { Input } from '@/components/ui/input'

export default function Bai2() {
  return (
    <div> Bài 2
        <Input type='text' placeholder='Rikkei Academy'></Input>
        <Input type='text' placeholder='10'></Input>
        <Input id='picture' type='file'></Input>
    </div>
  )
}
