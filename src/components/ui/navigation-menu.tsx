import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-white transition-colors hover:text-primary focus:outline-none focus:text-primary disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const state = (props as any)["data-state"];
    if (state === "open") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [(props as any)["data-state"]]);

  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Glassmorphism hover effect */}
      <span className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/5 transition-all duration-300 rounded-md"></span>
      
      {/* Active indicator line */}
      {isOpen && (
        <motion.span 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-gold"
          initial={{ width: 0, left: "50%" }}
          animate={{ width: "80%", left: "10%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      
      {children}{" "}
      
      <motion.div
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 inline-block"
        animate={{ 
          rotate: isOpen ? 180 : 0,
          opacity: isHovered || isOpen ? 1 : 0.7
        }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown className="h-3 w-3" aria-hidden="true" />
      </motion.div>
    </NavigationMenuPrimitive.Trigger>
  )
})
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full md:absolute md:w-auto",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    >
      {/* Enhanced curved shape at the bottom */}
      <div className="absolute -bottom-1 left-0 right-0 h-10 w-full overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M0 0L48 5.47826C96 10.9565 192 21.913 288 28.5217C384 35.1304 480 37.3913 576 35.1304C672 32.8696 768 26.2609 864 21.913C960 17.5652 1056 15.3043 1152 17.5652C1248 19.8261 1344 26.2609 1392 28.5217L1440 30.7826V40H1392C1344 40 1248 40 1152 40C1056 40 960 40 864 40C768 40 672 40 576 40C480 40 384 40 288 40C192 40 96 40 48 40H0V0Z" 
            fill="currentColor" 
            className="text-white opacity-5"
          />
        </svg>
      </div>

      {/* Glass effect inner highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute -inset-px rounded-xl bg-gradient-to-tr from-primary/10 via-transparent to-accent-gold/10 pointer-events-none opacity-20" />
      
      {/* Side highlights */}
      <div className="absolute top-4 bottom-4 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute top-4 bottom-4 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      
      {/* Content with proper padding for the curved shape */}
      <div className="relative z-10 pb-2">
        {props.children}
      </div>
    </NavigationMenuPrimitive.Viewport>
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <motion.div 
      className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-accent-gold shadow-lg"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} 