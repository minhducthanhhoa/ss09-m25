import React from 'react'
import { Slider } from "@/components/ui/slider"

export default function Bai6() {
  return (
    <div> Bài 6
        <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  )
}
