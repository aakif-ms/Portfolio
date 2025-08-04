import { useState } from "react";
import { motion } from "framer-motion"
import { useFloating, useHover, useInteractions } from '@floating-ui/react';
import PropTypes from 'prop-types';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

export default function TechComponent({ name, icon: Icon, classes, src }) {
    const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
    });

    const hover = useHover(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
    ]);

    return (
        <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            ref={refs.setReference} {...getReferenceProps()}>
            {Icon && <Icon className={classes} />}
            {src && <img src={src} className="w-16"/>}
            {isOpen && (
                <div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}>
                    {name}
                </div>
            )}
        </motion.div>
    )
}

TechComponent.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired, 
    classes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};