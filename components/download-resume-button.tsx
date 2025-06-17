"use client"

import { Button } from "@/components/ui/button"

export function DownloadResumeButton() {
  const handleDownload = () => {
    // Replace with your actual resume file URL
    const resumeUrl = "/resume.pdf"
    
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = "Premium_Motors_Resume.pdf" // Name of the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button 
      className="bg-zinc-800 hover:bg-zinc-700 text-white"
      onClick={handleDownload}
    >
      Download Resume
    </Button>
  )
} 