import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function Bai4() {
  return (
    <div>
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Môn học" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="HTML">HTML</SelectItem>
                <SelectItem value="CSS">CSS</SelectItem>
                <SelectItem value="Javascript">Javascript</SelectItem>
                <SelectItem value='ReactJS'>ReactJS</SelectItem>
                <SelectItem value='Next.js'>Next.js</SelectItem>
            </SelectContent>
        </Select>
    </div>
  )
}
