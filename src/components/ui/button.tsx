import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium relative overflow-hidden shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500 before:ease-in-out hover:bg-primary/90 hover:shadow-md hover:translate-y-[-2px] active:translate-y-[1px] active:shadow-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-md hover:translate-y-[-2px] active:translate-y-[1px] active:shadow-sm",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:shadow-md hover:translate-y-[-2px] active:translate-y-[1px] active:shadow-sm",
        secondary:
          "bg-secondary text-white before:absolute before:inset-0 before:bg-white/10 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500 before:ease-in-out hover:bg-secondary/90 hover:shadow-md hover:translate-y-[-2px] active:translate-y-[1px] active:shadow-sm",
        ghost: 
          "bg-transparent text-primary hover:bg-primary/5 hover:translate-y-[-2px] active:translate-y-[1px]",
        link: 
          "text-primary underline-offset-4 hover:underline",
        accent: 
          "bg-accent text-secondary before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent-gold/0 before:via-white/30 before:to-accent-gold/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700 hover:bg-accent-gold hover:shadow-[0_0_15px_rgba(255,207,98,0.5)] hover:translate-y-[-2px] active:translate-y-[1px] active:shadow-sm border border-accent-gold/20 transition-all",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
      animation: {
        none: "",
        shimmer: "animate-shimmer",
        pulse: "animate-pulse-subtle",
        float: "animate-float",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
