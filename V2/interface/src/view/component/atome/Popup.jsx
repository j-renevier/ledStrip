
import { useEffect, useLayoutEffect, useRef, useState } from 'preact/hooks';
import './popup.css'


const Popup = ({ children, popoverElementRef, handleClickOutside = true, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const [popupStyle, setPopupStyle] = useState({});

  useEffect(() => {
    if (!popoverElementRef?.current) return;

    const ref = popoverElementRef.current;

    const handleClick = (event) => {
      event.stopPropagation();
      setIsOpen(prev => !prev);
    };

    ref.addEventListener('click', handleClick);

    const parent = ref?.parentElement;
    if (parent) {
      const style = getComputedStyle(parent);
      const hasPosition = ['relative', 'absolute', 'fixed', 'sticky'].includes(style.position);
      if (!hasPosition) {
        parent.style.position = 'relative';
      }
    }

    return () => ref.removeEventListener('click', handleClick);
  }, [popoverElementRef?.current]);


  useEffect(() => {
    if (!handleClickOutside || !isOpen) return;
    const handleOutsideClick = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !popoverElementRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen, handleClickOutside]);


  useLayoutEffect(() => {
    if (!isOpen || !popupRef.current || !popoverElementRef.current) return;

    const popup = popupRef.current;
    const trigger = popoverElementRef.current;

    const popupRect = popup.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const minSpace = 10; // marge de sécurité pour affichage

    // Conditions verticales
    const top2Top = triggerRect.top - popupRect.height - minSpace > 0;
    const top2Bottom = triggerRect.top + popupRect.height + minSpace < viewportHeight;
    const bottom2Top = triggerRect.bottom - popupRect.height - minSpace > 0;
    const bottom2Bottom = viewportHeight - triggerRect.bottom - popupRect.height - minSpace > 0;

    // Conditions horizontales
    const left2Right = viewportWidth - triggerRect.left - popupRect.width - minSpace > 0;
    const left2Left = triggerRect.left - popupRect.width - minSpace > 0;
    const right2Right = viewportWidth - triggerRect.right - popupRect.width - minSpace > 0;
    const right2Left = triggerRect.right - popupRect.width - minSpace > 0;

    // Initialisation style
    const style = {
      top: 'initial',
      bottom: 'initial',
      left: 'initial',
      right: 'initial',
    };

    // Appliquer les combinaisons définies dans ton document
    if (top2Top && right2Right) {
      style.bottom = '100%';
      style.left = '100%';
    } else if (top2Bottom && right2Right) {
      style.top = '0';
      style.left = '100%';
    } else if (bottom2Bottom && right2Right) {
      style.top = '100%';
      style.left = '100%';
    } else if (bottom2Bottom && right2Left) {
      style.top = '100%';
      style.right = '0';
    } else if (top2Bottom && left2Left) {
      style.top = '0';
      style.right = '100%';
    } else if (top2Top && left2Right) {
      style.bottom = '100%';
      style.left = '0';
    } else if (bottom2Top && right2Right) {
      style.bottom = '0';
      style.left = '100%';
    } else {
      style.top = '100%';
      style.left = '0';
    }

    setPopupStyle(style);
  }, [isOpen, popoverElementRef]);


  return (
    <>
      { 
        isOpen ? (
          <div ref={popupRef} {...props} className={`popup-open ${props.className || ''}`} style={{...props?.style, ...popupStyle}}>
            {children}
          </div>
        ) : null
      }
    </>
  );
};

export default Popup

