"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SuccessModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    description?: string
    buttonText?: string
}

export function SuccessModal({
    isOpen,
    onClose,
    title = "Message Sent!",
    description = "Thank you for contacting us. We will get back to you shortly.",
    buttonText = "Close",
}: SuccessModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md border-0 bg-white/95 backdrop-blur-xl shadow-2xl">
                <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 0.6, bounce: 0.5 }}
                    >
                        <div className="rounded-full bg-green-100 p-3">
                            <CheckCircle2 className="w-12 h-12 text-green-600" />
                        </div>
                    </motion.div>

                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center text-[#194479]">
                            {title}
                        </DialogTitle>
                        <DialogDescription className="text-center text-gray-600 text-base">
                            {description}
                        </DialogDescription>
                    </DialogHeader>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full pt-4"
                    >
                        <Button
                            className="w-full bg-[#194479] hover:bg-[#13335b] text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                            onClick={onClose}
                        >
                            {buttonText}
                        </Button>
                    </motion.div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
