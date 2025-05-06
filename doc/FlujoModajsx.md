+-----------------------------+
|      App.jsx               |
|                             |
| - useState (activeModal)   |
| - setActiveModal(...)      |
| - <Modal isOpen ... />     |
+-------------+---------------+
              |
              v
+----------------------------------------+
|         Modal.jsx                      |
|                                        |
| Props:                                 |
| - isOpen (boolean)                     |
| - onClose (function)                   |
| - children (JSX content)               |
| - className (string, optional)         |
+----------------+-----------------------+
                 |
                 v
       +------------------------+
       | useEffect()           | <-- Montaje / Animación:
       | - visible: true/false |     - Activa transición
       | - Focus botón         |     - Agrega keydown ESC
       +------------------------+
                 |
                 v
+--------------------------------------------+
| Renderizado condicional:                   |
| if (!isOpen) return null                   |
+--------------------------------------------+
                 |
                 v
+---------------------------------------------------------------+
| <div class="overlay">                                         |
|  - fixed, bg-opacity, centered                                |
|  - Transición de opacidad (opacity-0 → opacity-100)           |
|  - onClick → onClose                                          |
|                                                               |
|   <div class="contenido" role="dialog" aria-modal="true">     |
|    - Animación: scale-90 → scale-100                          |
|    - className personalizada (props.className)                |
|    - <button ref={closeButtonRef}> ✕ </button>                |
|    - {children}                                               |
|   </div>                                                      |
+---------------------------------------------------------------+
