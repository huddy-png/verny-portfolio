import { motion as Motion, useInView } from "framer-motion";
import { useRef } from "react";
import { revealItemVariants } from "../revealVariants";

function RevealOnScroll({
  children,
  className = "",
  stagger = false,
  as: Component = "div",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const variants = stagger
    ? {
        hidden: revealItemVariants.hidden,
        visible: {
          ...revealItemVariants.visible,
          transition: {
            ...revealItemVariants.visible.transition,
            staggerChildren: 0.08,
          },
        },
      }
    : revealItemVariants;

  return (
    <Motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {Component === "div" ? children : <Component>{children}</Component>}
    </Motion.div>
  );
}

export default RevealOnScroll;
